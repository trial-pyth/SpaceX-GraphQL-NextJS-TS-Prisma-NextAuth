import { dragonData } from "@/lib/types";
import { useState } from "react";
import DragonDetails from "./DragonDetails";

("use client");
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

type DragonProps = {
  dragonsData: dragonData[];
};

const Dragon = (props: DragonProps) => {
  const { dragonsData } = props;
  // console.log(dragonsData);

  const [selectDragon, setSelectDragon] = useState<number>(0);

  const handleDragonClick = (index: number) => {
    setSelectDragon(index);
  };

  const { ref, inView } = useInView({
    // threshold : 0.7,
    delay: 1.9,
    triggerOnce: true,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: 0.3,
        },
      });
    }
  }, [inView]);

  return (
    <section className="my-3 overflow-hidden">
      <div className="dragon-section w-screen flex flex-row-reverse items-center relative justify-between h-[400px]  ">
        <motion.div
          ref={ref}
          className="dragon-info  absolute left-0 bg-gradient-to-r from-black to-transparent min-h-full w-[120vw] z-10 pt-10 pl-14 "
          animate={animation}
        >
          <div className="slider flex space-x-5">
            {dragonsData.map((dragon, index) => {
              // console.log(index)
              return (
                <button
                  key={index}
                  className={`text-xs border-b-2 border-zinc-500 cursor-pointer transition duration-750 ease-out ${
                    index != selectDragon ? "opacity-50" : ""
                  }`}
                  onClick={() => handleDragonClick(index)}
                >
                  {dragon.name}
                </button>
              );
            })}
          </div>
          {dragonsData.map((dragon, index) => {
            if (index === selectDragon) {
              return <DragonDetails key={dragon.id} dragon={dragon} />;
            }
          })}
        </motion.div>

        {dragonsData.map((dragon, index) => {
          if (index === selectDragon) {
            return (
              <img
                key={index}
                src={`${dragon.image}`}
                alt="dragon image"
                className="object-cover w-[100vw] h-full transition duration-300 ease-out "
              />
            );
          }
        })}
      </div>
    </section>
  );
};

export default Dragon;
