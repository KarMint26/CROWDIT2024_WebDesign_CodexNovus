import React, { useEffect, useState } from "react";
import AOS from "aos";
import DefaultView from "@/components/custom/DefaultView";
import CustomButtonWithIcon from "@/components/custom/CustomButtonWithIcon";
import { BsSoundwave } from "react-icons/bs";
import { HeroSoundscapes } from "@/utils";
import { listMood } from "@/utils/data";
import MoodCard from "@/components/soundscapes/MoodCard";

const Soundscapes = () => {
  const [moodActive, setMoodActive] = useState<string>("Anxious");

  const handleChangeMood = (activeMood: string) => {
    setMoodActive(activeMood);
  }
  
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
    </React.Fragment>
  );
};

export default Soundscapes;
