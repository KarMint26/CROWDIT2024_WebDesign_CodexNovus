import { IoRocket } from "react-icons/io5";
import CustomButtonWithIcon from "../custom/CustomButtonWithIcon";
import TextDescription from "../custom/TextDescription";
import TextTitle from "../custom/TextTitle";
import { heroB } from "@/utils";

function BHero() {
  return (
    <div className="w-full h-fit">
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center">
        <div className="flex flex-col gap-2 sm:gap-3">
          <TextTitle>
            Let me introduce you how to do{" "}
            <span className="text-mainColor">Breathing</span> techniques
          </TextTitle>
          <TextDescription value="Relaxation breathing techniques can help calm the mind and body before sleep. Here are some effective breathing technique steps: 4-7-8 technique, Diaphragmatic Breathing, Deep Breathing with Visualization, Bhramari Breathing Technique." />
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
        <img src={heroB} alt="hero-breathing" className="w-auto sm:w-[600px]" />
      </div>
    </div>
  );
}

export default BHero;
