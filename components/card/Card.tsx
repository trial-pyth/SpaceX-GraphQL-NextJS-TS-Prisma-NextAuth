import Image from "next/image";
import React from "react";
import Tags from "./Tags";

export type CardProps = {
  cardImgUrl: string | string[];
  title: string;
  tags?: Array<string>;
  details: string;
};

const Card = ({ cardImgUrl, title, details, tags }: CardProps) => {
  return (
    <section className="min-w-[300px] max-w-[300px] bg-black my-3 h-[550px] max-h-[550px] border-2 border-white/50 rounded-md overflow-hidden">
      <div className="relative w-full h-1/3 overflow-hidden object-contain">
        <Image
          src={
            cardImgUrl[0] ||
            "https://live.staticflickr.com/65535/49928343022_6fb33cbd9c_o.jpg"
          }
          alt="card-picture"
          fill
          sizes=""
          // width={200}
          // height={100}
          className="max-h-1/4 w-full rounded-t-md border-b-2 border-gray-500 ob"
        />
      </div>
      <div className="card-content min-w-full ml-5  my-5 space-y-4 ">
        <div className="w-full text-left text-2xl font-bold ">{title}</div>
        <p className="text-lg font-regular w-5/6 mb-3">
          {details?.substring(0, 165) + " ..."}
        </p>
        <div className="tags w-full space-x-2  overflow-y-visible ">
          {tags?.map((tag, index) => {
            return <Tags key={index} tag={tag} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Card;
