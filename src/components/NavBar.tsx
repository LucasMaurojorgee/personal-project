import { useState } from "react";
import { NavBarProps } from "../types/types";
import {
  ArrowRightCircleIcon,
  Bars3Icon,
  TvIcon,
} from "@heroicons/react/16/solid";

const NavBar = ({ items }: NavBarProps) => {
  const [open, setOpen] = useState(true);

  const handleClick = () => setOpen((prevState) => !prevState);

  return (
    <>
      <div className="navbar-play-contain">
        <div
          className={` ${
            open ? "w-64" : "w-20"
          } duration-500 h-screen p-5 pt-8 bg-slate-900 relative md:w-30`}
        >
          <ArrowRightCircleIcon
            className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 bg-cyan-500 ${
              open && "rotate-180"
            }`}
            onClick={handleClick}
          />
          <div className="flex gap-x-4 items-center">
            <Bars3Icon
              className={`h-10 w-10 text-white ${open && "rotate-[360deg]"}`}
            />
            <h1
              className={`text-white origin-left font-medium text-xl duration-300 ${
                !open && "scale-0"
              }`}
            >
              Menu
            </h1>
          </div>

          {items.map((item) => (
            <li
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 hover:bg-gray-50 hover:text-slate-900mt-2 menu-items`}
            >
              <TvIcon className="w-5 h-5" />
              <span className={`origin-left duration-200 ${!open && "hidden"}`}>
                {item}
              </span>
            </li>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavBar;
