import CustomButtonWithIcon from "@/components/custom/CustomButtonWithIcon";
import DefaultView from "@/components/custom/DefaultView";
import TextTitle from "@/components/custom/TextTitle";
import { listDreamInterpretations } from "@/utils/data";
import { useState } from "react";
import { IoRocket } from "react-icons/io5";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { id } from "date-fns/locale/id";
import ModalResultDream from "@/components/custom/ModalResultDream";
import { TypeDataDream } from "@/utils/types";
import DJTutorial from "@/components/DreamJournal/DJTutorial";
import DJHero from "@/components/DreamJournal/DJHero";
import DJHistory from "@/components/DreamJournal/DJHistory";
import convertDate from "@/utils/convertDate";
import axios from "axios";

const DreamJournal = () => {
  const [dreamDate, setDreamDate] = useState<Date>(new Date());
  const [loading, setLoading] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [dataDream, setDataDream] = useState<TypeDataDream>(
    listDreamInterpretations[0]
  );
  const [valeuInput, setValeuInput] = useState<string>("");
  let options = {
    method: "POST",
    url: import.meta.env.VITE_API_URL,
    headers: {
      "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
      "x-rapidapi-host": import.meta.env.VITE_RAPIDAPI_HOST,
      "Content-Type": "application/json",
    },
    data: {
      messages: [
        {
          role: "user",
          content:
            "acting as a science expert who can interpret dreams I will tell you the details of my dream and later you interpret it based on science, give the interpretation as much as one paragraph. the following is my dream: " +
            valeuInput,
        },
      ],
      system_prompt: "",
      temperature: 0.9,
      top_k: 5,
      top_p: 0.9,
      max_tokens: 256,
      web_access: false,
    },
  };

  const handleInterpretation = async () => {
    try {
      setLoading(true);
      const res = await axios.request(options);
      console.log(res.data);

      const data = {
        id: Date.now(),
        date: convertDate(dreamDate),
        dream: valeuInput,
        interpret: res.data.result,
      };

      listDreamInterpretations.unshift(data);

      setDataDream(data);
      setValeuInput("");
      setShowModal(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full relative">
      <DefaultView>
        {/* Section Hero */}
        <DJHero />

        {/* Section Tutorial */}
        <DJTutorial />

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
              onChange={(e) => setValeuInput(e.target.value)}
              className="rounded-xl bg-slate-200 block p-2.5 w-full text-sm text-gray-900 border border-purple-300 focus:ring-purple-500 focus:border-purple-500 lg:text-xl"
              placeholder="Write down the details of your dream here..."
            ></textarea>
            <div className="flex flex-col lg:flex-row lg:mt-3 lg:gap-10">
              <DatePicker
                selected={dreamDate}
                locale={id}
                dateFormat={"dd/MM/yyyy"}
                className="px-5 py-3 text-black mt-5 w-full lg:w-fit rounded-xl bg-slate-200"
                onChange={(date: Date | null) =>
                  setDreamDate(date || new Date())
                }
              />
              <CustomButtonWithIcon
                text={loading ? "Loading..." : "Get Interpretation"}
                icon={<IoRocket />}
                bgcolor="bg-mainColor"
                textcolor="text-white"
                bordercolor="border-secondaryColor"
                path="#"
                onhandleclick={handleInterpretation}
                customclass="w-fit mt-5"
              />
            </div>
          </div>
        </div>

        {/* Section History */}
        <DJHistory setShowModal={setShowModal} setDataDream={setDataDream} />
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
