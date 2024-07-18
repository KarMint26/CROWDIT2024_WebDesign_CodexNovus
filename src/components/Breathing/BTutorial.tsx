import { tutorB } from "@/utils";
import TextTitle from "../custom/TextTitle";
import Timeline from "../custom/Timeline";
import { listTextTutorialBreathing } from "@/utils/data";

function BTutorial() {
  return (
    <div className="w-full lg:mt-16 lg:mb-10" id="tryb">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <img src={tutorB} alt="img-dj" className="w-auto sm:w-[600px]" />
        <div className="w-full lg:w-1/2">
          <TextTitle>
            How To Use <span className="text-mainColor">Breathing</span>
            <Timeline data={listTextTutorialBreathing} />
          </TextTitle>
        </div>
      </div>
    </div>
  );
}

export default BTutorial;
