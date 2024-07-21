import React, { useEffect, useRef } from "react";
import AOS from "aos";
import { FaCirclePause, FaCirclePlay } from "react-icons/fa6";

type soundCard = {
  imgS: any;
  title: string;
  activeTitle: string;
  isPlay: boolean;
  audio: string;
  delay: number;
  handlePlay: (title: string) => void;
  handlePause: () => void;
};

const SoundCard = ({
  imgS,
  title,
  activeTitle,
  isPlay,
  audio,
  delay,
  handlePlay,
  handlePause,
}: soundCard) => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1500,
    });
  }, [isPlay, activeTitle, handlePlay, handlePause]);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const currentAudio = audioRef.current;

    if (currentAudio) {
      currentAudio.loop = true;

      if (isPlay && activeTitle === title) {
        currentAudio.play().catch(console.error);
      } else {
        currentAudio.pause();
      }
    }
  }, [isPlay, activeTitle, title]);

  return (
    <React.Fragment>
      <div
        data-aos="zoom-out"
        data-aos-delay={`${delay}`}
        className={`flex justify-center items-center flex-col border-4 ${
          activeTitle === title && isPlay
            ? "border-mainColor  bg-bgPurpleDark scale-105"
            : "border-secondaryColor  bg-mainColor"
        } w-full sm:w-[325px] gap-5 sm:gap-6 lg:gap-7 p-5 sm:p-6 rounded-2xl sm:rounded-3xl`}
      >
        <img
          src={imgS}
          alt="sound-img"
          className="rounded-xl sm:rounded-2xl lg:rounded-3xl"
        />
        <div className="flex justify-between items-center text-white w-full text-xl sm:text-2xl font-semibold">
          <h3>{title}</h3>
          {isPlay && activeTitle === title ? (
            <FaCirclePause
              onClick={() => handlePause()}
              className="text-xl sm:text-2xl cursor-pointer"
            />
          ) : (
            <FaCirclePlay
              onClick={() => handlePlay(title)}
              className="text-xl sm:text-2xl cursor-pointer"
            />
          )}
          <audio ref={audioRef} src={audio} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default SoundCard;
