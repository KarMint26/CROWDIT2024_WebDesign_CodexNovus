import { IoRocket } from "react-icons/io5";
import CustomButtonWithIcon from "../custom/CustomButtonWithIcon";
import TextDescription from "../custom/TextDescription";
import TextTitle from "../custom/TextTitle";
import { heroB } from "@/utils";
import { useEffect } from "react";
import AOS from "aos";

function BHero() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1500,
    });
  }, []);

  return (
    <div className="w-full h-fit">
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center">
        <div className="flex flex-col gap-2 sm:gap-3">
          <div data-aos="fade-right" data-aos-delay="50">
            <TextTitle>
              Let me introduce you how to do{" "}
              <span className="text-mainColor">Breathing</span> techniques
            </TextTitle>
          </div>
          <div data-aos="fade-right" data-aos-delay="150">
            <TextDescription value="Relaxation breathing techniques can help calm the mind and body before sleep. Here are some effective breathing technique steps: 4-7-8 technique, Diaphragmatic Breathing, Deep Breathing with Visualization, Bhramari Breathing Technique." />
          </div>
          <div data-aos="fade-right" data-aos-delay="250">
            <CustomButtonWithIcon
              text="Get Started"
              icon={<IoRocket />}
              bgcolor="bg-mainColor"
              textcolor="text-white"
              bordercolor="border-secondaryColor"
              path="#tryb"
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
          src={heroB}
          data-aos="zoom-in"
          data-aos-delay="200"
          alt="hero-breathing"
          className="w-auto sm:w-[600px]"
        />
      </div>
    </div>
  );
}

export default BHero;
