import Data from "@/components/data/Data";
import ExploreTab from "@/components/explorer-tab/ExploreTab";
import React from "react";
import { useRouter } from "next/router";
import { QueryClientProvider } from "react-query";
import { QueryClient } from "react-query";
type ExploreLayoutProps = {
  // any props that come into the component
  queryItem?: string | undefined;
  itemInfo?: string;
};

const queryClient = new QueryClient();

const ExploreLayout = ({ queryItem, itemInfo }: ExploreLayoutProps) => {
  // console.log(typeof exploreItem);
  const router = useRouter();
  // console.log(router.query);
  return (
    <>
      <div className="explore-page mt-16 flex">
        <ExploreTab />
        <QueryClientProvider client={queryClient}>
          <Data queryItem={router.query.explore} />
        </QueryClientProvider>
      </div>
    </>
  );
};

export default ExploreLayout;
