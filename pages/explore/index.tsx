import Sidebar from "@/components/sidebar/Sidebar";
import React from "react";

type Props = {};

const index = (props: Props) => {
  return (
    <div className="mt-16">
      <Sidebar showSide={true} />
    </div>
  );
};

export default index;
