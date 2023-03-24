"use client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Link from "next/link";
type BannerProps = {
  title: string;
  subTitle: string;
  imgUrl: string;
};

const Banner = ({ title, subTitle, imgUrl }: BannerProps) => {
  const { ref, inView } = useInView({
    threshold: 0.7,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
          duration: 1,
          delay: 0.5,
        },
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
        transition: {
          duration: 1,
          delay: 0.75,
        },
      });
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className="w-full overflow-hidden h-[500px] relative bg-black"
    >
      <img
        src={imgUrl}
        alt="banner-image"
        className="w-full opacity-70 max-h-full object-cover"
      />
      <motion.div
        className="absolute left-16 top-24  text-white"
        initial={{ opacity: 0 }}
        animate={animation}
      >
        <h1 className="text-xl py-2 text-white font-bold">{title}</h1>
        <h3 className="text- w-1/2 py-3">{subTitle}</h3>
        <button className="bg-white rounded-md shadow-xl p-3 text-slate-900 font-bold transition duration-300 ease-out hover:bg-black  hover:text-white ">
          <Link href="/explore/landpads">EXPLORE NOW</Link>
        </button>
      </motion.div>
    </div>
  );
};

export default Banner;
