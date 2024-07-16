import React from "react";
import { Link } from "react-router-dom";

type customBtn = {
  text: string;
  path: string;
  bgcolor: string;
  textcolor: string;
  bordercolor: string;
  customclass?: string;
};

const CustomButton = ({
  text,
  path,
  bordercolor,
  bgcolor,
  textcolor,
  customclass
}: customBtn) => {
  return (
    <React.Fragment>
      <Link
        className={`text-[0.8rem] sm:text-base font-semibold ${textcolor} ${bordercolor} ${bgcolor} rounded-full px-3 sm:px-4 py-2 border-2 ${customclass}`}
        to={path}
      >
        {text}
      </Link>
    </React.Fragment>
  );
};

export default CustomButton;
