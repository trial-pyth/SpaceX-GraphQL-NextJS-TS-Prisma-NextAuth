import { Search } from "@mui/icons-material";
import Info from "../info/Info";
import { useState, useRef, useCallback } from "react";
// import useSpaceData from "@/hooks/useSpaceData";
import DataMin from "./DataMin";
import { useInfiniteQuery } from "react-query";
import { getSpaceXData } from "../axios/axiosAPI";

type DataPageProps = {
  exploreItem?: "string";
  itemInfo?: string;
};

const Data = ({ exploreItem, itemInfo }: DataPageProps) => {
  const [pageNum, setPageNum] = useState(1);
  const {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    data,
    status,
    error,
  } = useInfiniteQuery(
    "/spaceData",
    ({ pageParam = 1 }) =>
      getSpaceXData("launches", { pageNum: pageParam, limit: 5 }),
    {
      getNextPageParam: (lastPage, allPages) => {
        console.log({ allPages });
        return lastPage?.data.docs.length ? allPages?.length + 1 : undefined;
      },
    }
  );

  // console.log(data);

  const intObserver = useRef();
  const lastDataRef = useCallback(
    (data) => {
      // console.log(data);
      if (isFetchingNextPage) return;

      if (intObserver.current) intObserver.current.disconnect();

      intObserver.current = new IntersectionObserver((datas) => {
        if (datas[0].isIntersecting && hasNextPage) {
          console.log("We are near the last post!");
          fetchNextPage();
        }
      });

      if (data) intObserver.current.observe(data);
    },
    [isFetchingNextPage, fetchNextPage, hasNextPage]
  );

  // const lastDataRef = useRef();

  if (status === "error") return <p>Error: {error?.message}</p>;

  const content = data?.pages.map((pg) => {
    // console.log(pg);
    return pg.data.docs.map((data, i) => {
      if (pg.data.docs.length === i + 1) {
        return <DataMin ref={lastDataRef} key={i} shortData={data} />;
      }

      return <DataMin key={i} shortData={data} />;
    });
  });

  // console.log(results);

  return (
    <>
      <div className="fixed ml-[20vw] min-w-[60vw] max-w-80 h-screen mr-[20vw]  max-w-[500px]  flex flex-col">
        <div className="mx-auto search mt-6 px-auto  border-red flex w-3/4 ">
          <Search className="mx-auto my-auto bg-sky-800/80 p-2 h-full w-1/12 rounded-l-md " />
          <input
            type="search"
            className="w-full bg-slate-600/50 border-none px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-gray-400 focus:ring-gray-400 block rounded-r-md sm:text-sm focus:ring-1 "
          />
        </div>

        <div
          className="w-[90%] mt-8 rounded-lg mx-auto h-[63%] overflow-y-auto 
      overflow-x-hidden bg-slate-600/30  grid grid-cols-1 gap-5 px-3 pt-5"
        >
          {content}
        </div>
        <div className="absolute right-0 top-0 bg-gradient-to-t from-black via-slate-300 to-black w-[1px] h-screen "></div>
        <div className="absolute left-0 top-0 bg-gradient-to-t from-black via-slate-300 to-black w-[1px] h-screen "></div>
      </div>
      <Info />
    </>
  );
};

export default Data;
