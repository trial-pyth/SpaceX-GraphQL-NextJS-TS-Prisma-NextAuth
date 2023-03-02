import { dataCondenser } from "@/lib/dataCondenser";
import React from "react";

type DataMinProps = {};

const DataMin = React.forwardRef(({ shortData, queryItem }, ref) => {
  console.log({ shortData, queryItem });

  const outputData = dataCondenser(queryItem, shortData);

  const dataBody = (
    <>
      <span className="text-xl">{outputData[0]}</span>
      <p>{outputData[1]}</p>
    </>
  );

  const content = ref ? (
    <div ref={ref} className="h-[50px]">
      {dataBody}
    </div>
  ) : (
    <div className="h-[50px]">{dataBody}</div>
  );

  return content;
});

export default DataMin;
