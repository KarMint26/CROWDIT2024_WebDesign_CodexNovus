import { TypeButtonTime } from "@/utils/types";

function ButtonTime({ minuteActive, text, handleClick }: TypeButtonTime) {
  return (
    <button
      className={`w-fit p-2 px-3 rounded-full text-center border-2 border-mainColor text-xs ${
        minuteActive.toString() === text
          ? "bg-mainColor text-white"
          : "text-mainColor bg-white"
      } font-semibold`}
      onClick={handleClick}
    >
      {text} Minutes
    </button>
  );
}

export default ButtonTime;
