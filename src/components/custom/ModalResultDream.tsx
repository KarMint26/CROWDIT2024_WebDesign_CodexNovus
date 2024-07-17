import TextTitle from "./TextTitle";
import TextDescription from "./TextDescription";
import { IoMdCloseCircle } from "react-icons/io";
import { FaCalendarDay, FaClipboardList } from "react-icons/fa6";

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
  return (
    <div className="w-full h-screen bg-slate-800 p-5 fixed top-0 z-[9999] flex items-center justify-center">
      <div className="w-full max-w-6xl m-auto rounded-xl bg-bgPurpleDark p-10">
        <div className="flex justify-center text-center items-center bg-white/50 px-5 py-5 rounded-xl">
          <TextTitle>
            <FaClipboardList className="inline mr-5" />
            Result Interpretation Dream
          </TextTitle>
        </div>
        <div className="my-5 lg:my-10">
          <TextDescription value={interpret.interpret} />
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center border-t-2 border-slate-300 pt-3">
          <p className="flex items-center text-lg mt-3 lg:mt-0 lg:text-2xl text-slate-300">
            {" "}
            <FaCalendarDay className="inline mr-3" /> {interpret.date}
          </p>
          <button
            onClick={handleClick}
            className="w-fit mt-5 p-3 px-5 rounded-full text-center bg-mainColor border-2 border-secondaryColor text-xl text-white"
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
