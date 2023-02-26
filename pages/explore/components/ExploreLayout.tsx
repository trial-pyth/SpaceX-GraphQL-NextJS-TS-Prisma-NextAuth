import Data from "@/components/data/Data";
import ExploreTab from "@/components/explorer-tab/ExploreTab";
import { SideBarItems } from "@/lib/types";
import React from "react";

type ExploreLayoutProps = {
  // any props that come into the component
  exploreItem?: SideBarItems;
  itemInfo?: string;
};

const ExploreLayout = ({ exploreItem, itemInfo }: ExploreLayoutProps) => {
  // console.log(typeof exploreItem);

  return (
    <>
      <div className="explore-page mt-16 flex">
        <ExploreTab />
        <Data exploreItem={exploreItem} />
      </div>
    </>
  );
};

export default ExploreLayout;
