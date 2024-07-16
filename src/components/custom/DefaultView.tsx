import React from "react";
import { useLocation } from "react-router-dom";

const DefaultView = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const pathname = location.pathname.split("/").pop();

  return (
    <React.Fragment>
      <div
        className={`${
          pathname === "login" || pathname === "register"
            ? "py-4 sm:py-6 lg:py-8"
            : "pt-20 lg:pt-24 pb-4"
        } px-5 sm:px-6 lg:px-8`}
      >
        {children}
      </div>
    </React.Fragment>
  );
};

export default DefaultView;
