import { AccountCircle, Bookmark } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import { useSession, signOut } from "next-auth/react";
const NavProps: { [x: string]: string } = {
  home: "/",
  launches: "/explore/launches",
  data: "/explore/crew",
};

const Navbar = () => {
  const { data: session, status } = useSession();
  const [showDrop, setShowDrop] = useState<boolean>(false);
  const [isScroll, setIsScroll] = useState<boolean>(false);
  const [showSide, setShowSide] = useState<boolean>(false);

  if (typeof window !== "undefined") {
    window.onscroll = () => {
      setIsScroll(window.pageYOffset === 0 ? false : true);
      return () => (window.onscroll = null);
    };
  }

  const router = useRouter();

  // console.log(router);

  const toggleSide = () => {
    setShowSide(!showSide);
  };

  const handleSignIn = () => {
    setShowDrop(!showDrop);
    router.push(`/api/auth/signin/callbackUrl=${router.asPath}`);
  };

  const handleSignOut = () => {
    signOut({ redirect: true, callbackUrl: "/auth/signin" });
    setShowDrop(!showDrop);
  };

  return (
    <>
      <div
        className={`w-screen h-16  text-white text-xl fixed top-0 backdrop-blur-sm z-[99] transition duration-300 ease ${
          !isScroll ? "bg-gradient-to-b from-slate-900 opacity-90" : "bg-black"
        }  
  `}
      >
        <div className="container flex justify-between w-screen mx-0 max-w-none">
          <div className="relative left flex text-sm font-light items-start px-5 mt-5 ">
            {router.pathname.includes("explore") === false && (
              <div
                className="hamburger flex flex-col justify-between w-5 h-4 cursor-pointer mr-4 transition duration-300 ease-in-out"
                onClick={toggleSide}
              >
                <span className="w-full rounded-sm h-0.5  bg-white"></span>
                <span className="w-full rounded-sm h-0.5 bg-white"></span>
                <span className="w-full  rounded-sm h-0.5 bg-white"></span>
              </div>
            )}

            {Object.keys(NavProps).map((key, index) => {
              return (
                <span key={index}>
                  <Link
                    className="mx-2 hover:font-bold"
                    href={`${NavProps[key]}`}
                  >
                    {key.toUpperCase()}
                  </Link>
                </span>
              );
            })}
          </div>
          <Image
            className="p-0 mx-auto absolute left-0 right-0 -top-16"
            src="/static/img/icon.svg"
            alt="library-icon"
            width={180}
            height={100}
          />
          <div className="right flex item-center justify-evenly my-auto mt-4">
            <span className={`text-sm font-light mr-2 mt-1 `}>
              Hello,{" "}
              {status === "authenticated"
                ? `${session?.user?.email}`
                : status === "unauthenticated"
                ? "Not Signed In"
                : "Please Wait"}
            </span>

            <div>
              <Link href="/saved-cards">
                <Bookmark className="mx-2 text-3xl" />
              </Link>
            </div>
            <div
              className={`flex mr-4 ${
                status === "authenticated" ? "mt-1" : ""
              }`}
            >
              <AccountCircle
                className={`mx-2 text-3xl relative hover:cursor-pointer ${
                  status === "loading" ? "animate-ping" : ""
                }`}
                onClick={() => setShowDrop(!showDrop)}
              />
              <span
                className={`flex w-36 text-right p-2 rounded-sm pl-8 flex-col absolute top-[70px] right-4 bg-black  font-semibold backdrop-blur-md text-sm shadow-2xl transition duration-300 ease-in-out ${
                  showDrop ? "opacity-70" : "opacity-0"
                }`}
              >
                <button
                  disabled={!showDrop}
                  onClick={session ? handleSignOut : handleSignIn}
                  className={`mb-2 inline transition duration-300 ease-out hover:text-gray-400 ${
                    !showDrop ? "cursor-none" : "cursor-pointer"
                  }`}
                >
                  {session ? "SIGN OUT" : "SIGN IN"}
                </button>
                <button
                  disabled={!showDrop}
                  className={`transition inline duration-300 ease-out hover:text-gray-400 ${
                    !showDrop ? "cursor-none" : "cursor-pointer"
                  }`}
                >
                  SETTINGS
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* <-- SideBar --> */}

      {!router.pathname.includes("/explore") && <Sidebar showSide={showSide} />}
    </>
  );
};

export default Navbar;
