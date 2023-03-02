import Data from "@/components/data/Data";
import ExploreTab from "@/components/explorer-tab/ExploreTab";
import React from "react";
import { useRouter } from "next/router";

type ExploreLayoutProps = {
  // any props that come into the component
  queryItem?: string | undefined;
  itemInfo?: string;
};

const ExploreLayout = ({ queryItem, itemInfo }: ExploreLayoutProps) => {
  // console.log(typeof exploreItem);
  const router = useRouter();
  // console.log(router.query);
  return (
    <>
      <div className="explore-page mt-16 flex">
        <ExploreTab />
        <Data queryItem={router.query.explore} />
      </div>
    </>
  );
};

export default ExploreLayout;
