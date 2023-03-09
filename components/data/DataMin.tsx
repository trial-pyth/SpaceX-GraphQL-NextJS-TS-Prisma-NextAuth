import { dataCondenser } from "@/lib/dataCondenser";
import React from "react";

const DataMin = React.forwardRef(({ shortData, queryItem }, ref) => {
  // console.log({ shortData, queryItem });
  // console.log(searchTerm);

  // const outputData = dataCondenser(queryItem, shortData);

  const dataBody = (
    <>
      <span className="text-xl">{shortData[0]}</span>
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
