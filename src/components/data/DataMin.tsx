import React, { forwardRef } from "react";
import Link from "next/link";

const DataMin = forwardRef<
  HTMLDivElement,
  { shortData: string[]; queryItem: string; gqlId: string }
>(({ shortData, queryItem, gqlId }, ref) => {
  const dataBody = (
    <>
      <span className="text-xl">{shortData[0]}</span>
      <p className="opacity-70">{shortData[1]}</p>
    </>
  );

  const content = ref ? (
    <div
      ref={ref}
      className={`h-[50px] mt-3 rounded-md pl-1 ${
        gqlId === shortData[2] ? "bg-slate-500/50" : ""
      } hover:bg-slate-500/50`}
    >
      <Link href={`/explore/${queryItem}/${shortData[2]}`}>{dataBody}</Link>
    </div>
  ) : (
    <div
      className={`h-[50px] mt-3 rounded-md pl-1 ${
        gqlId === shortData[2] ? "bg-slate-500/50" : ""
      } hover:bg-slate-500/50`}
    >
      <Link href={`/explore/${queryItem}/${shortData[2]}`}>{dataBody}</Link>
    </div>
  );

  return content;
});

export default DataMin;
