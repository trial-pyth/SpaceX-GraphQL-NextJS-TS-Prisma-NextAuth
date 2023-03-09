import { ArrowDownwardSharp, Search } from "@mui/icons-material";
import Info from "../info/Info";
import { useState, useRef, useCallback, useEffect, ReactElement } from "react";
// import useSpaceData from "@/hooks/useSpaceData";
import DataMin from "./DataMin";
import { useInfiniteQuery } from "react-query";
import { getSpaceXData } from "../axios/axiosAPI";
import { dataCondenser } from "@/lib/dataCondenser";
import { QueryItemType } from "@/lib/types";

const Data = ({ queryItem }: QueryItemType) => {
  // console.log(queryItem);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    data,
    status,
    error,
    refetch,
    remove,
  } = useInfiniteQuery(
    `{exploreItem}`,
    ({ pageParam = 1 }) =>
      getSpaceXData(queryItem + "", { pageNum: pageParam, limit: 5 }),
    {
      getNextPageParam: (lastPage, allPages) => {
        // console.log({ allPages });

        return lastPage?.data.docs.length ? allPages?.length + 1 : undefined;
      },
    }
  );

  // setRenderData(data);
  // console.log(data);

  useEffect(() => {
    if (queryItem !== undefined) {
      remove();
      setSearchTerm("");
      refetch();
    }
  }, [queryItem]);

  // console.log(data);

  const intObserver = useRef<HTMLDivElement>(null);
  const lastDataRef = useCallback(
    (data: ReactElement) => {
      // console.log({ data });
      if (isFetchingNextPage) return;

      if (intObserver.current) intObserver?.current?.disconnect();

      intObserver.current = new IntersectionObserver((datas) => {
        if (datas[0].isIntersecting && hasNextPage) {
          // console.log("We are near the last post!");
          fetchNextPage();
        }
      });

      if (data) intObserver?.current?.observe(data);
    },
    [isFetchingNextPage, fetchNextPage, hasNextPage]
  );

  // const lastDataRef = useRef();

  if (status === "error") return <p>Error: {error?.message}</p>;

  const content = data?.pages.map((pg) => {
    // console.log(pg);
    return pg.data.docs.map((data, i) => {
      // console.log({ data, queryItem });

      const outputData = dataCondenser(queryItem, data);
      // console.log(outputData);

      if (pg.data.docs.length === i + 1) {
        return (
          <DataMin
            ref={lastDataRef}
            key={i}
            shortData={outputData}
            queryItem={queryItem}
          />
        );
      }

      return <DataMin key={i} shortData={outputData} queryItem={queryItem} />;
    });
  });
  // console.log({ content });

  const render: any[] | undefined = [];

  content?.map((a) => {
    render?.push(
      a.filter((b) => {
        // console.log("b", b?.props?.shortData[0]?.toLowerCase());
        return b?.props?.shortData[0]
          ?.toLowerCase()
          .includes(searchTerm.toLowerCase());
      })
    );

    // console.log({ a });
  });
  // console.log({ render });

  return (
    <>
      <div className="ml-[20vw] min-w-[60vw] max-w-80 h-screen mr-[20vw] overflow-visible max-w-[500px]  flex flex-col">
        <div className="mx-auto search mt-6 px-auto  border-red flex w-3/4 ">
          <Search className="mx-auto my-auto bg-sky-800/80 p-2 h-full w-1/12 rounded-l-md " />
          <input
            type="search"
            className="w-full bg-slate-600/50 border-none px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-gray-400 focus:ring-gray-400 block rounded-r-md sm:text-sm focus:ring-1 "
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div
          className="relative w-[90%] mt-8 rounded-lg mx-auto h-[63%] overflow-y-auto 
      overflow-x-hidden bg-slate-600/30 justify-start  flex flex-col px-3 pt-5 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-400"
        >
          {hasNextPage && (
            <span className="sticky top-0 right-0 h-8 w-8 animate-bounce bg-sky-900/70 text-fuchsia-200/80 mx-auto p-1 rounded-full">
              <span className="mx-auto">
                <ArrowDownwardSharp />
              </span>
            </span>
          )}
          {render}
        </div>

        <div className="absolute right-[20vw] top-0 bg-gradient-to-t from-black via-slate-300 to-black w-[1px] h-screen"></div>
        <div className="absolute left-[20vw] top-0 bg-gradient-to-t from-black via-slate-300 to-black w-[1px] h-screen"></div>
      </div>
      <Info />
    </>
  );
};

export default Data;
