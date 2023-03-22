import { ArrowDownwardSharp, Search } from "@mui/icons-material";
import CircularProgress from "@mui/material/CircularProgress";
import { useState, useRef, useCallback, useEffect, ReactElement } from "react";
import DataMin from "./DataMin";
import { useInfiniteQuery } from "react-query";
import { getSpaceXData } from "../axios/axiosAPI";
import { dataCondenser } from "@/src/lib/dataCondenser";
import { QueryItemType, ReactQueryItemType } from "@/src/lib/types";

type DataProps = {
  queryItem?: QueryItemType;
};

const Data = ({ queryItem }: DataProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    data,
    status,
    error,
    refetch,
    isLoading,
    remove,
  } = useInfiniteQuery(
    `{exploreItem}`,
    ({ pageParam = 1 }) =>
      getSpaceXData(queryItem + "", { pageNum: pageParam, limit: 5 }),
    {
      enabled: !!queryItem,
      getNextPageParam: (lastPage, allPages) => {
        return lastPage?.data.docs.length ? allPages?.length + 1 : undefined;
      },
    }
  );

  useEffect(() => {
    if (queryItem !== undefined) {
      remove();
      setSearchTerm("");
      refetch();
    }
  }, [queryItem]);

  const intObserver = useRef<HTMLDivElement>(null);
  const lastDataRef = useCallback(
    (data: ReactElement) => {
      if (isFetchingNextPage) return;

      if (intObserver.current) intObserver?.current?.disconnect();

      intObserver.current = new IntersectionObserver((datas) => {
        if (datas[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });

      if (data) intObserver?.current?.observe(data);
    },
    [isFetchingNextPage, fetchNextPage, hasNextPage]
  );

  if (status === "error") return <p>Error: {error?.message}</p>;

  const content = data?.pages.map((pg) => {
    return pg.data.docs.map((data: ReactQueryItemType, i: number) => {
      const outputData = dataCondenser(queryItem, data);

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

  const render: any[] | undefined = [];

  content?.map((a) => {
    render?.push(
      a.filter((b) => {
        return b?.props?.shortData[0]
          ?.toLowerCase()
          .includes(searchTerm.toLowerCase());
      })
    );
  });

  return (
    <>
      <div className="ml-[20vw] min-w-[60vw] max-w-80 pb-11 max-h-[400px] mr-[20vw] overflow-hidden max-w-[500px]  flex flex-col ">
        <div className="mx-auto search mt-6 px-auto  border-red flex w-3/4 ">
          <span className="mx-auto my-auto bg-sky-800/80 p-2 h-full w-1/12 rounded-l-md ">
            <Search />
          </span>
          <input
            type="search"
            className="w-full bg-slate-600/50 border-none px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-gray-400 focus:ring-gray-400 block rounded-r-md sm:text-sm focus:ring-1 "
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {!isLoading && (
          <span className="mx-auto text-sm text-gray-500/95">
            Click on a row to know more
          </span>
        )}

        <div className="relative w-[90%] mt-4 rounded-lg mx-auto h-[600px] overflow-y-auto overflow-x-hidden bg-slate-600/30 justify-start flex flex-col px-3 pt-5 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-400">
          {hasNextPage && (
            <span className="sticky top-0 right-0 h-8 w-8 animate-bounce bg-sky-900/70 text-fuchsia-200/80 mx-auto p-1 rounded-full">
              <span className="mx-auto">
                <ArrowDownwardSharp />
              </span>
            </span>
          )}
          {isLoading && <CircularProgress className="mx-auto text-slate-400" />}
          {render}
        </div>

        <div className="absolute right-[20vw] top-0 bg-gradient-to-t from-black via-slate-300 to-black w-[1px] h-screen"></div>
        <div className="absolute left-[20vw] top-0 bg-gradient-to-t from-black via-slate-300 to-black w-[1px] h-screen"></div>
      </div>
    </>
  );
};

export default Data;
