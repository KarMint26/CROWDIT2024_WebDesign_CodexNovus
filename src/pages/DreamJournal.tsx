import CustomButtonWithIcon from "@/components/custom/CustomButtonWithIcon";
import DefaultView from "@/components/custom/DefaultView";
import TextDescription from "@/components/custom/TextDescription";
import TextTitle from "@/components/custom/TextTitle";
import Timeline from "@/components/custom/Timeline";
import { dj, heroDJ } from "@/utils";
import { listTextTutorialDJ } from "@/utils/data";
import React from "react";
import { IoRocket } from "react-icons/io5";

const DreamJournal = () => {
  return (
    <React.Fragment>
      <DefaultView>
        {/* Section Hero */}
        <div className="w-full h-fit">
          <div className="flex flex-col-reverse lg:flex-row justify-between items-center">
            <div className="flex flex-col gap-2 sm:gap-3">
              <TextTitle>
                Write down your <span className="text-mainColor">dreams</span>{" "}
                and interpret their{" "}
                <span className="text-mainColor">meanings</span>
              </TextTitle>
              <TextDescription
                value="Nocturn is an Web app designed to help you improve your sleep.
                With a range of innovative features, Nocturn becomes a loyal
                companion on your journey to a deeper and more refreshing sleep."
              />
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
            <img src={heroDJ} alt="hero-DJ" className="w-auto sm:w-[600px]" />
          </div>
        </div>

        {/* Section Tutorial */}
        <div className="w-full lg:mt-16 lg:mb-10" id="trydj">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <img src={dj} alt="img-dj" className="w-auto sm:w-[600px]" />
            <div className="w-full lg:w-1/2">
              <TextTitle>
                How To Use <span className="text-mainColor">Dream Journal</span>
                <Timeline data={listTextTutorialDJ} />
              </TextTitle>
            </div>
          </div>
        </div>
      </DefaultView>
    </React.Fragment>
  );
};

export default DreamJournal;
