import { FaInfoCircle } from "react-icons/fa";
import ButtonTime from "../custom/ButtonTime";
import { HiSpeakerphone } from "react-icons/hi";
import { FaPlay } from "react-icons/fa6";
import { TypeBCard } from "@/utils/types";
import { useState } from "react";
import { SiApplemusic } from "react-icons/si";

function BCard({ title, description }: TypeBCard) {
  const [minuteActive, setMinuteActive] = useState<number>(0);
  const [tabActive, setTabActive] = useState<string>("audio");
  return (
    <div className="w-full p-5 bg-mainColor mb-10 rounded-xl max-w-xl m-auto shadow-xl shadow-secondaryColor/50 hover:shadow-secondaryColor/85">
      <div className="flex justify-between bg-slate-800 px-5 p-3 rounded-xl">
        <h3 className="text-white text-xl font-semibold">{title}</h3>
        <button
          className="text-xl"
          onClick={() => {
            setTabActive(tabActive === "audio" ? "interpretation" : "audio");
          }}
        >
          {tabActive === "audio" ? (
            <FaInfoCircle className="text-white text-shadow-2xl" />
          ) : (
            <SiApplemusic className="text-white text-shadow-2xl" />
          )}
        </button>
      </div>
      {tabActive === "audio" ? (
        <div className="flex items-center gap-5">
          {/* Choose Time */}
          <div className="p-3 w-32 h-40 mt-3 bg-white rounded-xl gap-1 justify-between flex flex-col">
            <ButtonTime
              text="1"
              minuteActive={minuteActive}
              handleClick={() => setMinuteActive(1)}
            />
            <ButtonTime
              text="3"
              minuteActive={minuteActive}
              handleClick={() => setMinuteActive(3)}
            />
            <ButtonTime
              text="5"
              minuteActive={minuteActive}
              handleClick={() => setMinuteActive(5)}
            />
          </div>
          <div className="flex h-40 mt-3 flex-col justify-between">
            <div className="text-white p-5 h-full bg-bgPurpleDark rounded-xl w-[400px]">
              <HiSpeakerphone className="inline mr-3" />
              Sit or lie down in a comfortable position
            </div>
            <div className="flex w-full items-center mt-5 gap-3 justify-between">
              <div className="flex items-center gap-5 rounded-xl bg-bgPurpleDark pr-5">
                <button className="px-5 py-3 bg-white shadow rounded-xl">
                  <FaPlay className="text-mainColor inline mr-2 text-2xl" />
                </button>
                <p className="text-white">00:00</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full mt-3 min-h-44 h-auto bg-bgPurpleDark p-5 rounded-xl">
          {description}
        </div>
      )}
    </div>
  );
}

export default BCard;
