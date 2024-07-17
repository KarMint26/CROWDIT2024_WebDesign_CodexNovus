import { FaCalendar, FaEye } from "react-icons/fa6";

type TypeHistory = {
  id: number;
  date: string;
  dream: string;
  interpret: string;
  handleClick: () => void;
};

function CardHistory({ id, date, dream, handleClick }: TypeHistory) {
  const text = dream.slice(0, 170);
  return (
    <div
      key={id}
      className="bg-slate-200 w-full max-w-2xl p-5 rounded-2xl shadow-xl shadow-mainColor/70 hover:shadow-mainColor"
    >
      <div className="flex pb-3 border-b-2 justify-between border-b-slate-300 gap-5 items-center">
        <div className="flex items-center text-slate-500">
          <FaCalendar className="mr-3" />
          <p>{date}</p>
        </div>
        <button
          onClick={handleClick}
          className="px-3 flex items-center gap-2 py-2 rounded-full border-2 border-mainColor text-mainColor hover:bg-mainColor hover:text-white"
        >
          <FaEye />
          Interpretation
        </button>
      </div>
      <p className="text-slate-500 mt-4">{text}...</p>
    </div>
  );
}

export default CardHistory;
