import React from "react";

type TagProps = {
  tag: string | number;
};

const Tags = (props: TagProps) => {
  const { tag } = props;
  return (
    <span className="rounded-full bg-gray-200 text-slate-900 font-bold py-2 px-4">
      {tag}
    </span>
  );
};

export default Tags;
