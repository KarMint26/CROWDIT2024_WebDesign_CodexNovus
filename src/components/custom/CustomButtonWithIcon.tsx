import React from "react";
import { Link } from "react-router-dom";

type customBtn = {
  text: string;
  path: string;
  bgcolor: string;
  textcolor: string;
  bordercolor: string;
  icon: any;
  customclass?: string;
  onhandleclick?: any;
};

const CustomButtonWithIcon = ({
  text,
  path,
  bordercolor,
  bgcolor,
  textcolor,
  icon,
  customclass,
  onhandleclick,
}: customBtn) => {
  return (
    <React.Fragment>
      <Link
        className={`flex justify-center items-center gap-2 text-[0.85rem] sm:text-base lg:text-[1.1rem] font-semibold ${textcolor} ${bordercolor} ${bgcolor} rounded-full px-4 sm:px-5 py-2 border-2 ${customclass}`}
        to={path}
        onClick={onhandleclick}
      >
        {icon}
        {text}
      </Link>
    </React.Fragment>
  );
};

export default CustomButtonWithIcon;
