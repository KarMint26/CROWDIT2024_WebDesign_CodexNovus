import React from "react";
import { RiRobot2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const IconChatbot = () => {
  return (
    <React.Fragment>
      <div className="fixed bottom-[5.5rem] sm:bottom-20 right-5 flex flex-row items-center justify-center gap-3 sm:gap-5 z-20">
        <Link to="/chatbot" className="text-base sm:text-lg lg:text-xl shadow border-2 border-secondaryColor bg-bgPurpleDark transition duration-300 rounded-full p-3 cursor-pointer text-white ring-2 ring-mainColor">
          <RiRobot2Fill />
        </Link>
      </div>
    </React.Fragment>
  );
};

export default IconChatbot;
