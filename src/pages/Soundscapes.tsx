import React, { useEffect, useState } from "react";
import AOS from "aos";
import DefaultView from "@/components/custom/DefaultView";
import CustomButtonWithIcon from "@/components/custom/CustomButtonWithIcon";
import { BsSoundwave } from "react-icons/bs";
import { HeroSoundscapes } from "@/utils";
import { listMood, soundList } from "@/utils/data";
import MoodCard from "@/components/soundscapes/MoodCard";
import SoundCard from "@/components/soundscapes/SoundCard";
import { FaCirclePause, FaCirclePlay, FaForward } from "react-icons/fa6";

const Soundscapes = () => {
  const [moodActive, setMoodActive] = useState<string>("Anxious");
  const [titleSound, setTitleSound] = useState<string>("Bird Song");
  const [soundImg, setSoundImg] = useState<any>(
    "/assets/soundscapes/sound-list-img/birdsong.png"
  );
  const [position, setPosition] = useState<number>(0);
  const [isPlay, setIsPlay] = useState<boolean>(false);

  const handleChangeMood = (activeMood: string) => {
    setMoodActive(activeMood);
  };

  const handleActiveSound = (title: string, soundImg: any, pos: number) => {
    setIsPlay(true);
    setTitleSound(title);
    setSoundImg(soundImg);
    setPosition(pos);
  };

  const nonaktifSound = () => {
    setIsPlay(false);
  };

  const nextSound = () => {
    if (position === 7) {
      const nextSd = soundList[position - 7];
      setTitleSound(nextSd.name);
      setSoundImg(nextSd.img);
      setPosition(position - 7);
    } else {
      const nextSd = soundList[position + 1];
      setTitleSound(nextSd.name);
      setSoundImg(nextSd.img);
      setPosition(position + 1);
    }
  };

  const prevSound = () => {
    if (position === 0) {
      const prevSd = soundList[position + 7];
      setTitleSound(prevSd.name);
      setSoundImg(prevSd.img);
      setPosition(position + 7);
    } else {
      const prevSd = soundList[position - 1];
      setTitleSound(prevSd.name);
      setSoundImg(prevSd.img);
      setPosition(position - 1);
    }
  };

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1500,
    });
  }, []);

  return (
    <React.Fragment>
      {/* Hero Soundscapes */}
      <DefaultView>
        <div className="w-full h-fit">
          <div className="flex flex-col-reverse lg:flex-row-reverse justify-between items-center">
            <div className="flex flex-col gap-2 sm:gap-3">
              <h1
                data-aos="fade-left"
                data-aos-delay="50"
                className="font-bold text-2xl sm:text-4xl lg:text-6xl"
              >
                Improve your sleep quality with{" "}
                <span className="text-mainColor">Nocturn Soundscapes</span>
              </h1>
              <p
                data-aos="fade-left"
                data-aos-delay="150"
                className="text-sm md:text-base lg:text-[1.25rem]"
              >
                Nocturn Soundscapes comes with a variety of soothing audios to
                help you fall asleep quickly. Choose the audio that suits your
                mood, feel your body and mind relax, and enjoy a deep, quality
                sleep.
              </p>
              <div data-aos="fade-left" data-aos-delay="250">
                <CustomButtonWithIcon
                  text="Try Now"
                  icon={<BsSoundwave />}
                  bgcolor="bg-mainColor"
                  textcolor="text-white"
                  bordercolor="border-secondaryColor"
                  path="#"
                  customclass="w-fit mt-2"
                  onhandleclick={() =>
                    window.scrollTo({
                      top: 800,
                    })
                  }
                />
              </div>
            </div>
            <img
              src={HeroSoundscapes}
              alt="hero-landing-page"
              className="w-auto sm:w-[600px]"
              data-aos="zoom-in-up"
              data-aos-delay="100"
            />
          </div>
        </div>
      </DefaultView>

      {/* Mood List */}
      <div className="mood_list_container flex flex-col gap-3 py-4 px-5 sm:px-6 lg:px-8 mb-4">
        <h1
          data-aos="fade-right"
          data-aos-delay="100"
          className="font-semibold text-xl sm:text-3xl lg:text-5xl"
        >
          Choose according to your mood condition
        </h1>
        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-8 gap-3 sm:gap-5 place-items-center">
          {listMood.map((data) => (
            <MoodCard
              key={data.id}
              moodImg={data.numberImg}
              altImg={`mood-img-${data.id}`}
              text={data.name}
              delay={data.delay}
              activeMood={moodActive}
              handleChangeMood={handleChangeMood}
            />
          ))}
        </div>
      </div>

      {/* Sounds List */}
      <div className="sound_list flex flex-col gap-3 py-4 px-5 sm:px-6 lg:px-8 mb-4">
        <h1
          data-aos="fade-right"
          data-aos-delay="150"
          className="font-semibold text-xl sm:text-3xl lg:text-5xl"
        >
          Choose your preferred audio
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-7 lg:gap-8 place-items-center mt-2 sm:mt-3">
          {soundList.map((data) => (
            <SoundCard
              key={data.id}
              id={data.id}
              activeTitle={titleSound}
              isPlay={isPlay}
              audio={data.audio}
              imgS={data.img}
              title={data.name}
              delay={data.delay}
              handlePlay={handleActiveSound}
              handlePause={nonaktifSound}
            />
          ))}
        </div>
      </div>

      {/* Audio Player */}
      <div
        className={`fixed flex items-center top-20 sm:top-auto sm:bottom-5 right-[50%] translate-x-[50%] bg-bgPurpleDark border-2 lg:border-4 border-gray-300 w-[80%] sm:w-fit p-3 sm:p-4 lg:p-5 px-3 sm:px-4 lg:px-7 rounded-full gap-3 sm:gap-4 lg:gap-5 transition-all duration-300 ${
          isPlay ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        <div className="flex flex-col justify-center items-center gap-2 sm:gap-3 h-fit px-1">
          <img
            src={soundImg}
            alt="sound-img"
            className="w-14 sm:w-20 rounded-lg"
          />
          <p className="text-[0.7rem] sm:text-base font-normal">{titleSound}</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-3 sm:gap-4">
          <h3 className="font-semibold text-base sm:text-xl">
            Nocturn Soundscapes
          </h3>
          <div className="flex justify-center items-center gap-4 sm:gap-5 lg:gap-6 text-xl sm:text-2xl">
            <FaForward
              className="rotate-180 cursor-pointer"
              onClick={() => prevSound()}
            />
            {isPlay ? (
              <FaCirclePause
                className="cursor-pointer"
                onClick={() => nonaktifSound()}
              />
            ) : (
              <FaCirclePlay className="cursor-pointer" />
            )}
            <FaForward className="cursor-pointer" onClick={() => nextSound()} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Soundscapes;
