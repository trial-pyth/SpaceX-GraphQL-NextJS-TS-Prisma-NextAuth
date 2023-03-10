import React from "react";
import DataMin from "../data/DataMin";

type Props = {};

const ScrollSection = ({ exploreItem, lastDataRef, shortData }) => {
  return (
    <div
      className="w-[90%] mt-8 rounded-lg mx-auto h-[63%] overflow-y-auto 
      overflow-x-hidden bg-slate-600/30  grid grid-cols-1 gap-5 px-3 pt-5"
    >
      {results.map((data, i) => {
        if (results.length === i + 1) {
          return <DataMin key={i} ref={lastDataRef} shortData={shortData} />;
        }

        return <DataMin key={i} shortData={data} />;
      })}
    </div>
  );
};

export default ScrollSection;
