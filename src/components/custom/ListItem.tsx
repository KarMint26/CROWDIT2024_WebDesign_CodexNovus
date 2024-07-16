import { Link } from "react-router-dom";
import React from "react";

export default function ListItem({
  activeLink,
  text,
  href,
  icon,
}: {
  href: string;
  text: string;
  icon: any;
  activeLink: string | any;
}) {
  return (
    <React.Fragment>
      <Link
        to={href}
        className={`flex justify-center items-center gap-3 transition duration-300 font-semibold ease-in-out hover:text-white group hover:bg-mainColor hover:border-secondaryColor focus:text-white focus:bg-mainColor active:text-white active:bg-mainColor rounded-full p-3 border-2 outline-none ${
          activeLink === href.split("/").pop()
            ? "text-white bg-mainColor border-secondaryColor"
            : "text-[#dadada]"
        }`}
      >
        <div
          className={`group border-[3px] transition duration-100 ease-in-out rounded-full p-[0.35rem] group-hover:border-white group-focus:border-white group-active:border-white ${
            activeLink === href.split("/").pop()
              ? "border-white"
              : "border-[#dadada]"
          }`}
        >
          {icon}
        </div>
        {text}
      </Link>
    </React.Fragment>
  );
}
