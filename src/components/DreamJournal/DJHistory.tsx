import TextTitle from "../custom/TextTitle";
import { MdOutlineHistory } from "react-icons/md";
import { listDreamInterpretations } from "@/utils/data";
import CardHistory from "../custom/CardHistory";
import { TypeHistory } from "@/utils/types";

function DJHistory({ setShowModal, setDataDream }: TypeHistory) {
  return (
    <>
      <div className="flex justify-center mt-16 mb-5 lg:mb-10">
        <TextTitle>
          <MdOutlineHistory className="inline mr-5" />
          History Interpretation <span className="text-mainColor">Dreams</span>
        </TextTitle>
      </div>
      <div className="w-full p-2 flex gap-3 justify-center flex-wrap mb-5 lg:mb-16">
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
