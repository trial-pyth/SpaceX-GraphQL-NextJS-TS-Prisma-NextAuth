import { getSpaceXData } from "@/components/axios/axiosAPI";
import { SideBarItems } from "@/components/explorer-tab/ExploreTab";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useSpaceData = (pageNum = 1, exploreItem = "crew") => {
  const router = useRouter();

  const [results, setResults] = useState(Array());
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState({});
  const [hasNextPage, setHasNextPage] = useState(false);

  //   console.log(
  //     router?.components["/explore/[explore]"]?.resolvedAs?.split("/")[2]
  //   );

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    setError({});

    const controller = new AbortController();
    const signal = controller.signal;

    getSpaceXData("launches", { pageNum, limit: 5, signal })
      .then((data) => {
        setResults((prev) => [...prev, ...data?.data?.docs]);
        setHasNextPage(Boolean(data?.data?.docs.length));
        setIsLoading(false);
      })
      .catch((e: Error) => {
        setIsLoading(false);
        if (signal.aborted) return;
        setIsError(true);
        setError({ message: e.message });
      });
    return () => controller.abort();
  }, [pageNum]);

  return { isLoading, isError, error, results, hasNextPage };
};

export default useSpaceData;
