import Data from "../components/data/Data";
import ExploreTab from "../components/explorer-tab/ExploreTab";
import { QueryItemType } from "@/src/lib/types";
import React, { ReactNode } from "react";
import { QueryClientProvider } from "react-query";
import { QueryClient } from "react-query";

const queryClient = new QueryClient();

type ExploreLayoutProps = {
  queryItem: QueryItemType;
  children?: ReactNode;
  gqlId?: string;
};

const ExploreLayout = ({ queryItem, gqlId, children }: ExploreLayoutProps) => {
  return (
    <div className="explore-page mt-16 flex">
      <ExploreTab />
      <QueryClientProvider client={queryClient}>
        <Data queryItem={queryItem} gqlId={gqlId} />
      </QueryClientProvider>
      {children}
    </div>
  );
};

export default ExploreLayout;
