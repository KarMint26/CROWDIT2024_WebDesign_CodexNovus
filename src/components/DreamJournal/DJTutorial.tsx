import { dj } from "@/utils";
import TextTitle from "../custom/TextTitle";
import Timeline from "../custom/Timeline";
import { listTextTutorialDJ } from "@/utils/data";

function DJTutorial() {
  return (
    <div className="w-full lg:mt-16 lg:mb-10">
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
  );
}

export default DJTutorial;
