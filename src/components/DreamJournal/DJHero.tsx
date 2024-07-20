import { IoRocket } from "react-icons/io5";
import CustomButtonWithIcon from "../custom/CustomButtonWithIcon";
import TextDescription from "../custom/TextDescription";
import TextTitle from "../custom/TextTitle";
import { heroDJ } from "@/utils";
import { useEffect } from "react";
import AOS from "aos";

function DJHero() {
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
              Write down your <span className="text-mainColor">dreams</span> and
              interpret their <span className="text-mainColor">meanings</span>
            </TextTitle>
          </div>
          <div data-aos="fade-right" data-aos-delay="150">
            <TextDescription
              value="Nocturn is an Web app designed to help you improve your sleep.
                With a range of innovative features, Nocturn becomes a loyal
                companion on your journey to a deeper and more refreshing sleep."
            />
          </div>
          <div data-aos="fade-right" data-aos-delay="250">
            <CustomButtonWithIcon
              text="Get Started"
              icon={<IoRocket />}
              bgcolor="bg-mainColor"
              textcolor="text-white"
              bordercolor="border-secondaryColor"
              path="#trydj"
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
          data-aos="zoom-in"
          data-aos-delay="200"
          src={heroDJ}
          alt="hero-DJ"
          className="w-auto sm:w-[600px]"
        />
      </div>
    </div>
  );
}

export default DJHero;
