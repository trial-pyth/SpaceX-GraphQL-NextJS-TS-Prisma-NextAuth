import Data from "../components/data/Data";
import ExploreTab from "../components/explorer-tab/ExploreTab";
import { QueryItemType } from "@/src/lib/types";
import React from "react";
import { QueryClientProvider } from "react-query";
import { QueryClient } from "react-query";

const queryClient = new QueryClient();

type ExploreLayoutProps = {
  queryItem?: QueryItemType;
};

const ExploreLayout = ({ queryItem }: ExploreLayoutProps) => {
  // console.log(queryItem);
  return (
    <div className="explore-page mt-16 flex">
      <ExploreTab />
      <QueryClientProvider client={queryClient}>
        <Data queryItem={queryItem} />
      </QueryClientProvider>
    </div>
  );
};

export default ExploreLayout;
