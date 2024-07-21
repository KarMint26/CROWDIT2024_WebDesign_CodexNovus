import { useEffect, useState } from "react";
import TextTitle from "../custom/TextTitle";
import BCard from "./BCard";
import AOS from "aos";
import { dataCardBreath, delays } from "@/utils/data";

function BAudios() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1500,
    });
  }, []);

  return (
    <>
      <div
        className="text-center mb-10 mt-20"
        data-aos="zoom-in-up"
        data-aos-delay="150"
      >
        <TextTitle>
          Audios Techniques <span className="text-mainColor">Breathing</span>
        </TextTitle>
      </div>
      <div className="w-full m-auto max-w-7xl p-3 flex items-center justify-center gap-5 flex-wrap">
        {dataCardBreath.map((item, i) => (
          <BCard
            key={item.id}
            title={item.title}
            description={item.description}
            timeRanges={item.timeRanges}
            delay={250 + delays[i]}
            active={active}
            setActive={setActive}
          />
        ))}
      </div>
    </>
  );
}

export default BAudios;
