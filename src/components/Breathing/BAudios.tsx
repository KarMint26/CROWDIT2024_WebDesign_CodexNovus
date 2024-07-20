import { useEffect } from "react";
import TextTitle from "../custom/TextTitle";
import BCard from "./BCard";
import AOS from "aos";

const delays = [0, 50, 100, 150];

// data for: diaphragmatic breathing
const datasd: { start: number; end: number; text: string }[] = [];
for (let i = 0; i < 300; i += 5) {
  if (i % 10 < 5) {
    datasd.push({
      start: i,
      end: i + 4,
      text: "inhale through the nose, squeeze your abs",
    });
  } else {
    datasd.push({
      start: i,
      end: i + 4,
      text: "exhale through your nose, let your belly",
    });
  }
}

// data for: reverse breathing
const datasrb: { start: number; end: number; text: string }[] = [];
for (let i = 0; i < 300; i += 5) {
  if (i % 10 < 5) {
    datasrb.push({
      start: i,
      end: i + 4,
      text: "inhale through the nose, squeeze your abs",
    });
  } else {
    datasrb.push({
      start: i,
      end: i + 4,
      text: "exhale through your nose, let your belly",
    });
  }
}

// data for: three dimensional breathing
const datastd: { start: number; end: number; text: string }[] = [];
for (let i = 0; i < 300; i += 5) {
  if (i % 15 < 5) {
    datastd.push({
      start: i,
      end: i + 4,
      text: "inhale through the nose, squeeze your abs",
    });
  } else if (i % 15 < 10) {
    datastd.push({ start: i, end: i + 4, text: "hold your breath" });
  } else {
    datastd.push({
      start: i,
      end: i + 4,
      text: "exhale through your nose, let your belly",
    });
  }
}

// data for: 4-7-8 breathing
const datas478: { start: number; end: number; text: string }[] = [];
for (let i = 0; i < 300; i += 19) {
  datas478.push({ start: i, end: i + 3, text: "Tarik Napas" });
  datas478.push({ start: i + 4, end: i + 10, text: "Tahan Napas" });
  datas478.push({ start: i + 11, end: i + 18, text: "Buang Napas" });
}
const dataCardBreath = [
  {
    id: 0,
    title: "Diaphragmatic Breathing",
    description:
      "Diaphragmatic breathing, also known as deep or abdominal breathing, involves using the diaphragm to take deep breaths, causing the abdomen to rise while keeping the chest still. This technique promotes full oxygen exchange, which can reduce stress and anxiety by activating the parasympathetic nervous system. Benefits include improved lung function, increased oxygen supply to the body, lower blood pressure, and enhanced core muscle stability. It is commonly used in practices like yoga and meditation to support overall physical and mental well-being.",
    timeRanges: datasd,
  },
  {
    id: 1,
    title: "Reverse Breathing",
    description:
      "Reverse breathing, also known as Taoist breathing, is a technique where the abdomen contracts during inhalation and expands during exhalation, the opposite of normal diaphragmatic breathing. This method is often used in martial arts, qigong, and certain forms of meditation. The primary benefit of reverse breathing is to strengthen the core muscles and improve internal energy flow, which is believed to enhance overall vitality and resilience. It can also help improve focus and mental clarity by promoting a heightened awareness of the breath and body. Additionally, reverse breathing can aid in developing greater control over the body's respiratory and abdominal muscles, contributing to improved posture and stability.",
    timeRanges: datasrb,
  },
  {
    id: 2,
    title: "Three Dimensional Breathing",
    description:
      "Three-dimensional breathing is a technique that involves expanding the breath into three dimensions: front to back, side to side, and top to bottom. This method ensures that the entire lung capacity is utilized, promoting full and deep breaths. The primary focus is on the lateral (side-to-side) and posterior (back) expansion, which is often neglected in shallow breathing. Benefits of three-dimensional breathing include enhanced oxygen intake, improved respiratory efficiency, and reduced stress. This technique can also support better posture and core strength by engaging the diaphragm and intercostal muscles. It is commonly practiced in yoga, Pilates, and physical therapy to increase body awareness and overall respiratory health",
    timeRanges: datastd,
  },
  {
    id: 3,
    title: "4-7-8 Breathing Technique",
    description:
      "The 4-7-8 Breathing Technique, developed by Dr. Andrew Weil, is a simple yet powerful relaxation exercise. It involves inhaling through the nose for 4 seconds, holding the breath for 7 seconds, and exhaling slowly through the mouth for 8 seconds. This practice helps calm the nervous system and reduce stress by promoting oxygen exchange and regulating breath. The technique can improve sleep quality, reduce anxiety, and lower blood pressure by encouraging a slower, more deliberate breathing pattern. Additionally, it can help manage cravings and control emotional responses, making it a valuable tool for overall mental and physical health.",
    timeRanges: datas478,
  },
];
function BAudios() {
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
          />
        ))}
      </div>
    </>
  );
}

export default BAudios;
