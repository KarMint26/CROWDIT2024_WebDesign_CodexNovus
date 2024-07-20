import TextTitle from "../custom/TextTitle";
import { MdOutlineHistory } from "react-icons/md";
import { listDreamInterpretations } from "@/utils/data";
import CardHistory from "../custom/CardHistory";
import { TypeHistory } from "@/utils/types";
import AOS from "aos";
import { useEffect } from "react";

function DJHistory({ setShowModal, setDataDream }: TypeHistory) {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1500,
    });
  }, []);

  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-delay="150"
        className="flex justify-center mt-16 mb-5 lg:mb-10"
      >
        <TextTitle>
          <MdOutlineHistory className="inline mr-5" />
          History Interpretation <span className="text-mainColor">Dreams</span>
        </TextTitle>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="250"
        className="w-full p-2 flex gap-3 justify-center flex-wrap mb-5 lg:mb-16"
      >
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
    </>
  );
}

export default DJHistory;
