import TextDescription from "./TextDescription";
import { IoMdCloseCircle } from "react-icons/io";
import { FaCalendarDay, FaClipboardList } from "react-icons/fa6";
import { useEffect } from "react";
import AOS from "aos";

type TypeModal = {
  interpret: {
    id: number;
    date: string;
    dream: string;
    interpret: string;
  };
  handleClick: () => void;
};
function ModalResultDream({ interpret, handleClick }: TypeModal) {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1500,
    });
  }, []);

  return (
    <div className="w-full h-screen bg-slate-800 p-5 fixed top-0 z-[9999] flex items-center justify-center">
      <div
        data-aos="zoom-in"
        className="w-full max-w-6xl m-auto rounded-xl bg-bgPurpleDark p-5 lg:p-10 overflow-y-auto"
      >
        <div className="flex justify-center text-center items-center bg-white/50 px-5 py-5 rounded-xl">
          <div className="flex justify-center items-center font-bold text-center gap-2 sm:gap-3 text-[1rem] sm:text-3xl lg:text-5xl">
            <FaClipboardList />
            Result Interpretation Dream
          </div>
        </div>
        <div className="mt-5 mb-2 lg:mb-6 lg:mt-10 w-full overflow-y-auto h-[300px]">
          <TextDescription value={interpret.interpret} />
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center border-t-2 border-slate-300 pt-3">
          <p className="flex items-center text-lg mt-3 lg:mt-0 lg:text-2xl text-slate-300 overflow-y-auto">
            {" "}
            <FaCalendarDay className="inline mr-3" /> {interpret.date}
          </p>
          <button
            onClick={handleClick}
            className="w-fit mt-5 p-2 px-3 sm:p-3 sm:px-5 rounded-full text-center bg-mainColor border-2 border-secondaryColor text-base sm:text-xl text-white"
          >
            <IoMdCloseCircle className="inline mr-3" />
            Close Result
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalResultDream;
