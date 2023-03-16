import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { SideBarItems } from "@/src/lib/types";

const ExploreTab = () => {
  const router = useRouter();
  return (
    <div className="fixed top-16 left-0 w-[20vw] h-screen ">
      <div className="mx-5 ml-9 flex flex-col gap-4 uppercase ">
        {SideBarItems.map((item: string, index: number) => {
          return (
            <Link key={index} href={`/explore/${item}`}>
              <div
                className={`text-white/50 tracking-wider  hover:text-white cursor-pointer hover:border-r-2  ${
                  router.asPath.split("/")[2] === item
                    ? "text-white border-r-2"
                    : ""
                }`}
              >
                {item}
              </div>
            </Link>
          );
        })}
      </div>
      <div className="absolute right-[20vw] top-0 bg-gradient-to-t from-black via-slate-300 to-black w-[1px] h-screen"></div>
    </div>
  );
};

export default ExploreTab;
