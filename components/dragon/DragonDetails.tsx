import { dragonData } from "@/lib/types";
import Link from "next/link";
("use client");
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

type DragonDetailsProps = {
  dragon: dragonData;
};

const DragonDetails = (props: DragonDetailsProps) => {
  // console.log(props);

  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
          duration: 1,
          delay: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
        transition: {
          duration: 1,
          delay: 1,
        },
      });
    }
  }, [inView]);
  const { dragon } = props;
  return (
    <motion.article
      ref={ref}
      className="dragon-info  tracking-widest mt-8 space-y-4"
      animate={animation}
    >
      <h1 className="text-lg font-bold ">{dragon.name.toUpperCase()}</h1>
      <h4 className="text-sm">{dragon.type}</h4>
      <div className="flex ">
        <div className="table w-1/3 ">
          <div className="table-row-group ">
            <div className="table-row">
              <div className="table-cell text-left ">Crew</div>
              <div className="table-cell text-left ">
                {dragon.crew_capacity}
              </div>
            </div>
          </div>
          <div className="table-row-group">
            <div className="table-row">
              <div className="table-cell ">Mass</div>
              <div className="table-cell ">{dragon.mass} kg</div>
            </div>
            <div className="table-row">
              <div className="table-cell ">Diameter</div>
              <div className="table-cell ">{dragon.diameter} ft.</div>
            </div>
            <div className="table-row">
              <div className="table-cell ">Trunk Volume</div>
              <div className="table-cell ">
                {dragon.trunk} ft<sup>3</sup>{" "}
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell ">Payload</div>
              <div className="table-cell ">{dragon.payload} kg</div>
            </div>
            <div className="table-row">
              <div className="table-cell ">Height</div>
              <div className="table-cell ">{dragon.height} ft.</div>
            </div>
            <div className="table-row">
              <div className="table-cell ">Active</div>
              <div className="table-cell ">{dragon.active}</div>
            </div>
          </div>
        </div>
        <aside className="description w-1/3 text-sm font-extralight flex flex-col space-y-6 justify-start items-end">
          <p>{dragon.description.slice(0, 250) + "  ..."}</p>
          <Link href={dragon.wikipedia}>
            <button className="bg-white rounded-md mt-5 text-black p-2 px-6 w-fit font-extrabold cursor-pointer">
              Wikipedia
            </button>
          </Link>
        </aside>
      </div>
    </motion.article>
  );
};

export default DragonDetails;
