import { launchPad } from "@/src/lib/types";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import { useRef, useState } from "react";
import Card from "../card/Card";

type direction = "left" | "right";

type LaunchProps = {
  title: string;
  launchData: launchPad[] | undefined;
};

const Launch = ({ title, launchData }: LaunchProps) => {
  const listRef = useRef<HTMLDivElement | null>(null);

  const [slideNumber, setSlideNumber] = useState<number>(0);

  const handleClick = (direction: direction) => {
    const distance: number = listRef!.current!.getBoundingClientRect().x - 80;
    // console.log(distance);
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber((prev) => prev - 1);
      listRef!.current!.style.transform = `translateX(${
        300 + distance + 165
      }px)`;
    }
    if (direction === "right" && slideNumber < 3) {
      setSlideNumber((next) => next + 1);
      listRef!.current!.style.transform = `translateX(${-300 + distance}px)`;
    }
  };

  // console.log(slideNumber);
  return (
    <>
      <span className="text-3xl font-bold ml-8 ">{title}</span>
      <div className="wrapper relative flex items-center ">
        <span className="leftBtn z-20 absolute  w-[80px] h-full cursor-pointer bg-gradient-to-r from-black ">
          {!!slideNumber && (
            <ArrowBackIosOutlined
              onClick={() => handleClick("left")}
              className="w-[50px] my-auto h-full cursor-pointer"
            />
          )}
        </span>
        <div
          className="card-container space-x-4 px-20 flex mt-6 transition duration-1000 ease-out "
          ref={listRef}
          // style={{ transform: "translateX(-900px)" }}
        >
          {launchData?.map((data: launchPad, index) => {
            return (
              <div key={data.id}>
                <Card
                  title={data.name}
                  tags={data.tags}
                  cardImgUrl={data.images}
                  details={data.details}
                />
              </div>
            );
          })}
        </div>
        <span className="rightBtn z-20 absolute top-0 bottom-0 right-0 w-[80px] h-full flex flex-row-reverse bg-gradient-to-l from-black ">
          {slideNumber !== 3 && (
            <ArrowForwardIosOutlined
              onClick={() => handleClick("right")}
              className="w-[50px]  h-full cursor-pointer mr-2"
            />
          )}
        </span>
      </div>
    </>
  );
};

export default Launch;
