import React from "react";
import { LuArrowUpToLine } from "react-icons/lu";

const BtnBackTop = () => {
  return (
    <React.Fragment>
      <div className="fixed bottom-7 sm:bottom-5 right-5 flex flex-row items-center justify-center gap-3 sm:gap-5 z-20">
        <div
          onClick={() => {
            window?.scrollTo({
              top: 0,
            });
          }}
          className="text-base sm:text-lg lg:text-xl shadow border-2 border-secondaryColor bg-bgPurpleDark transition duration-300 rounded-full p-3 cursor-pointer text-white ring-2 ring-mainColor"
        >
          <LuArrowUpToLine />
        </div>
      </div>
    </React.Fragment>
  );
};

export default BtnBackTop;
