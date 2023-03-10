import React from "react";
import Link from "next/link";

const DataMin = React.forwardRef(({ shortData, queryItem }, ref) => {
  const dataBody = (
    <>
      <Link href={`/explore/${queryItem}/${shortData[2]}`}>
        <span className="text-xl">{shortData[0]}</span>
      </Link>
      <p className="opacity-70">{shortData[1]}</p>
    </>
  );

  const content = ref ? (
    <div ref={ref} className="h-[50px] mt-3">
      {dataBody}
    </div>
  ) : (
    <div className="h-[50px] mt-3">{dataBody}</div>
  );

  return content;
});

export default DataMin;
