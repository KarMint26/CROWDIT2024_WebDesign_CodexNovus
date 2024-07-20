import { FaInfoCircle } from "react-icons/fa";
import ButtonTime from "../custom/ButtonTime";
import { HiSpeakerphone } from "react-icons/hi";
import { FaPause, FaPlay } from "react-icons/fa6";
import { TypeBCard } from "@/utils/types";
import { useEffect, useState } from "react";
import { SiApplemusic } from "react-icons/si";

const timeRanges: { start: number; end: number; text: string }[] = [];
for (let i = 0; i < 300; i += 5) {
  if (i % 10 < 5) {
    timeRanges.push({ start: i, end: i + 4, text: "Tarik Napas" });
  } else {
    timeRanges.push({ start: i, end: i + 4, text: "Buang Napas" });
  }
}
function BCard({ title, description }: TypeBCard) {
  const [minuteActive, setMinuteActive] = useState<number>(0);
  const [tabActive, setTabActive] = useState<string>("audio");
  const [play, setPlay] = useState<boolean>(false);
  const [audio] = useState(new Audio("/audio/breathing.mp3"));
  const [time, setTime] = useState(0);
  const [textDynamic, setTextDynamic] = useState<string>("Cari posisi nyaman");

  useEffect(() => {
    if (play) {
      audio.play();
      const interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);

      audio.addEventListener("timeupdate", () => {
        const timeSeconds = Math.floor(audio.currentTime);
        setTime(timeSeconds);
        const currentRange = timeRanges.find(
          (range) => timeSeconds >= range.start && timeSeconds <= range.end
        );
        if (currentRange) {
          setTextDynamic(currentRange.text);
        }
      });

      return () => {
        clearInterval(interval);
        audio.removeEventListener("timeupdate", () => {});
      };
    } else {
      audio.pause();
    }
  }, [audio, play, time]);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const mm = String(minutes).padStart(2, "0");
    const ss = String(remainingSeconds).padStart(2, "0");
    return `${mm}:${ss}`;
  };

  const handlePlay = (m: number) => {
    setPlay(true);
    setMinuteActive(m);
    if (!play) {
      audio.play();
      setPlay(true);
    } else {
      audio.pause();
      setPlay(false);
    }
  };

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
        <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-5">
          {/* Choose Time */}
          <div className="p-3 lg:w-32 lg:h-40 mt-3 bg-white rounded-xl gap-1 justify-between flex flex-row lg:flex-col">
            <ButtonTime
              text="1"
              minuteActive={minuteActive}
              handleClick={() => handlePlay(1)}
            />
            <ButtonTime
              text="3"
              minuteActive={minuteActive}
              handleClick={() => handlePlay(3)}
            />
            <ButtonTime
              text="5"
              minuteActive={minuteActive}
              handleClick={() => handlePlay(5)}
            />
          </div>
          <div className="flex lg:h-40 lg:mt-3 flex-col justify-between">
            <div className="text-white p-5 h-full bg-bgPurpleDark rounded-xl lg:w-[400px]">
              <HiSpeakerphone className="inline mr-3" />
              {textDynamic}
            </div>
            <div className="flex w-full items-center justify-center mt-3 lg:mt-5 gap-3 lg:justify-between">
              <div className="flex items-center gap-5 rounded-xl bg-bgPurpleDark pr-5">
                <button
                  className="px-5 py-3 bg-white shadow rounded-xl"
                  onClick={() =>
                    minuteActive === 0
                      ? alert("Please choose time")
                      : setPlay(!play)
                  }
                >
                  {play ? (
                    <FaPause className="text-mainColor inline mr-2 text-2xl" />
                  ) : (
                    <FaPlay className="text-mainColor inline mr-2 text-2xl" />
                  )}
                </button>
                <p className="text-white">{formatTime(time)}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full mt-3 min-h-44 h-auto bg-bgPurpleDark p-5 rounded-xl">
          <p className="text-white text-xs lg:text-sm">{description}</p>
        </div>
      )}
    </div>
  );
}

export default BCard;
