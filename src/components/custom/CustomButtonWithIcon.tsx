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
};

const CustomButtonWithIcon = ({
  text,
  path,
  bordercolor,
  bgcolor,
  textcolor,
  icon,
  customclass
}: customBtn) => {
  return (
    <React.Fragment>
      <Link
        className={`flex justify-center items-center gap-2 text-[0.8rem] sm:text-base font-semibold ${textcolor} ${bordercolor} ${bgcolor} rounded-full px-3 sm:px-4 py-2 border-2 ${customclass}`}
        to={path}
      >
        {icon}
        {text}
      </Link>
    </React.Fragment>
  );
};

export default CustomButtonWithIcon;
