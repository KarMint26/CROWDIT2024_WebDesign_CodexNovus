import CustomButtonWithIcon from "@/components/custom/CustomButtonWithIcon";
import DefaultView from "@/components/custom/DefaultView";
import TextDescription from "@/components/custom/TextDescription";
import TextTitle from "@/components/custom/TextTitle";
import Timeline from "@/components/custom/Timeline";
import { dj, heroDJ } from "@/utils";
import { listDreamInterpretations, listTextTutorialDJ } from "@/utils/data";
import { useState } from "react";
import { IoRocket } from "react-icons/io5";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { id } from "date-fns/locale/id";
import { MdOutlineHistory } from "react-icons/md";
import CardHistory from "@/components/custom/CardHistory";
import ModalResultDream from "@/components/custom/ModalResultDream";

type TypeDataDream = {
  id: number;
  date: string;
  dream: string;
  interpret: string;
};
const DreamJournal = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [showModal, setShowModal] = useState<boolean>(false);
  const [dataDream, setDataDream] = useState<TypeDataDream>(
    listDreamInterpretations[0]
  );

  return (
    <div className="w-full relative">
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

        {/* Section Input Dreams */}
        <div
          className="w-full max-w-7xl m-auto p-5 lg:p-10 rounded-3xl bg-bgPurpleDark shadow-lg mb-5 lg:my-28 shadow-secondaryColor/75"
          id="trydj"
        >
          <div className="text-center pb-5 lg:pb-10 mb-5 border-b-2 border-white/50">
            <TextTitle>
              Write Down Your <span className="text-mainColor">Dream</span>
            </TextTitle>
          </div>
          <div className="">
            <textarea
              id="message"
              rows={4}
              className="rounded-xl bg-slate-200 block p-2.5 w-full text-sm text-gray-900 border border-purple-300 focus:ring-purple-500 focus:border-purple-500 lg:text-xl"
              placeholder="Write down the details of your dream here..."
            ></textarea>
            <div className="flex flex-col lg:flex-row lg:mt-3 lg:gap-10">
              <DatePicker
                selected={startDate}
                locale={id}
                dateFormat={"dd/MM/yyyy"}
                className="px-5 py-3 text-black mt-5 w-fit rounded-xl bg-slate-200"
                onChange={(date: Date | null) =>
                  setStartDate(date || new Date())
                }
              />
              <CustomButtonWithIcon
                text="Get Interpretation"
                icon={<IoRocket />}
                bgcolor="bg-mainColor"
                textcolor="text-white"
                bordercolor="border-secondaryColor"
                path="#trydj"
                customclass="w-fit mt-5"
              />
            </div>
          </div>
        </div>

        {/* Section History */}
        <div className="flex justify-center mt-16 mb-5 lg:mb-10">
          <TextTitle>
            <MdOutlineHistory className="inline mr-5" />
            History Interpretation{" "}
            <span className="text-mainColor">Dreams</span>
          </TextTitle>
        </div>
        <div className="w-full p-2 flex gap-3 justify-center flex-wrap">
          {listDreamInterpretations.map((item) => (
            <CardHistory
              handleClick={() => {
                setDataDream(item);
                setShowModal(true);
              }}
              key={item.id}
              {...item}
            />
          ))}
        </div>
      </DefaultView>
      {showModal && (
        <ModalResultDream
          interpret={dataDream}
          handleClick={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default DreamJournal;
