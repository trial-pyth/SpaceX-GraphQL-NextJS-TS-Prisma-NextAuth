import React from "react";

type DataMinProps = {};

const DataMin = React.forwardRef(({ shortData }, ref) => {
  const dataBody = (
    <>
      <span className="text-xl">{shortData.name}</span>
      <p>{shortData.agency}</p>
    </>
  );

  const content = ref ? (
    <article ref={ref} className="h-[50px]">
      {dataBody}
    </article>
  ) : (
    <article className="h-[50px]">{dataBody}</article>
  );

  return content;
});

export default DataMin;
