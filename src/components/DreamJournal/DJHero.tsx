import { IoRocket } from "react-icons/io5";
import CustomButtonWithIcon from "../custom/CustomButtonWithIcon";
import TextDescription from "../custom/TextDescription";
import TextTitle from "../custom/TextTitle";
import { heroDJ } from "@/utils";

function DJHero() {
  return (
    <div className="w-full h-fit">
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center">
        <div className="flex flex-col gap-2 sm:gap-3">
          <TextTitle>
            Write down your <span className="text-mainColor">dreams</span> and
            interpret their <span className="text-mainColor">meanings</span>
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
  );
}

export default DJHero;
