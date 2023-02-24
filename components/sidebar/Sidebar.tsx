import React from "react";

let SideBarItems = [
  "crew",
  "info",
  "launches",
  "landpads",
  "payloads",
  "capsules",
  "rockets",
  "ships",
  "starlink",
  "media",
];

type SidebarProps = {
  showSide: boolean;
};

const Sidebar = ({ showSide }: SidebarProps) => {
  return (
    <>
      <nav
        className={`z-50 fixed h-screen w-[300px] bg-black top-0 transition duration-700 ease-in-out -left-[300px] ${
          showSide ? "translate-x-[300px]" : ""
        }`}
      >
        <div className="w-5/6 mx-auto text-center text-xl mt-16 tracking-[0.75rem] font-bold">
          EXPLORE
        </div>

        <div className="mx-5 mt-6 ml-9 flex flex-col gap-4 uppercase ">
          {SideBarItems.map((item: string, index: number) => {
            return (
              <div
                key={index}
                className="text-white/60 tracking-wider hover:text-white cursor-pointer"
              >
                {item}
              </div>
            );
          })}
        </div>
        <div className="absolute right-0 w-4 h-full bg-white"></div>
      </nav>
    </>
  );
};

export default Sidebar;
