import {
  AccountCircle,
  ArrowDropDown,
  Bookmark,
  Search,
} from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import { useSession, signIn, signOut } from "next-auth/react";
type NavItems = "HOME" | "LAUNCHES" | "DATA" | "ROADSTER";
const NavProps: NavItems[] = ["HOME", "LAUNCHES", "DATA", "ROADSTER"];

const Navbar = () => {
  const { data: session } = useSession();
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

  const toggleSide = () => {
    setShowSide(!showSide);
  };

  const handleSignIn = () => {
    router.push(`/api/auth/signin/callbackUrl=${router.asPath}`);
  };

  const handleSignOut = () => signOut({ redirect: false });

  return (
    <>
      <div
        className={`w-screen h-16  text-white text-xl fixed top-0 backdrop-blur-sm z-[99] transition duration-300 ease ${
          !isScroll ? "bg-gradient-to-b from-slate-900 opacity-90" : "bg-black"
        }  
  `}
      >
        <div className="container flex justify-between w-screen mx-0 max-w-none">
          <div className="relative left flex text-sm font-light items-start px-5 mt-4 ">
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
            {NavProps.map((item, index) => {
              return (
                <span key={index}>
                  <Link className="mx-2 hover:font-bold" href="/">
                    {item}
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
            <div>
              <Search className="mx-2 text-3xl" />
            </div>
            <div>
              <Bookmark className="mx-2 text-3xl" />
            </div>
            <div className="flex ">
              <AccountCircle className="mx-2 text-3xl" />
            </div>
            <div className="flex mr-7">
              <ArrowDropDown
                onClick={() => setShowDrop(!showDrop)}
                className="relative hover:cursor-pointer"
              />

              <div
                className={`flex w-36 text-right p-2 rounded-sm pl-8 flex-col absolute top-[70px] right-10 bg-black  font-semibold backdrop-blur-md text-sm shadow-2xl transition duration-300 ease-in-out ${
                  showDrop ? "opacity-70" : "opacity-0"
                }`}
              >
                <button
                  onClick={session ? handleSignOut : handleSignIn}
                  className="mb-2 inline transition duration-300 ease-out hover:text-gray-400 cursor-pointer"
                >
                  {session ? "SIGN OUT" : "SIGN IN"}
                </button>
                <button className=" transition inline duration-300 ease-out hover:text-gray-400 cursor-pointer">
                  SETTINGS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <-- SideBar --> */}

      {router.pathname === "/" && <Sidebar showSide={showSide} />}
    </>
  );
};

export default Navbar;
