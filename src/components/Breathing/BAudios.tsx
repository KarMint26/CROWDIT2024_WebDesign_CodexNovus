import TextTitle from "../custom/TextTitle";
import BCard from "./BCard";

function BAudios() {
  return (
    <>
      <div className="text-center mb-10 mt-20">
        <TextTitle>
          Audios Techniques <span className="text-mainColor">Breathing</span>
        </TextTitle>
      </div>
      <div className="w-full max-w-7xl p-3 flex items-center justify-center gap-5 flex-wrap">
        <BCard
          title="Diaphragmatic Breathing"
          description="Diaphragmatic breathing, also known as deep or abdominal breathing, involves using the diaphragm to take deep breaths, causing the abdomen to rise while keeping the chest still. This technique promotes full oxygen exchange, which can reduce stress and anxiety by activating the parasympathetic nervous system. Benefits include improved lung function, increased oxygen supply to the body, lower blood pressure, and enhanced core muscle stability. It is commonly used in practices like yoga and meditation to support overall physical and mental well-being."
        />
        <BCard
          title="Reverse Breathing"
          description="Reverse breathing, also known as Taoist breathing, is a technique where the abdomen contracts during inhalation and expands during exhalation, the opposite of normal diaphragmatic breathing. This method is often used in martial arts, qigong, and certain forms of meditation. The primary benefit of reverse breathing is to strengthen the core muscles and improve internal energy flow, which is believed to enhance overall vitality and resilience. It can also help improve focus and mental clarity by promoting a heightened awareness of the breath and body. Additionally, reverse breathing can aid in developing greater control over the body's respiratory and abdominal muscles, contributing to improved posture and stability."
        />
        <BCard
          title="Three Dimensional Breathing"
          description="Three-dimensional breathing is a technique that involves expanding the breath into three dimensions: front to back, side to side, and top to bottom. This method ensures that the entire lung capacity is utilized, promoting full and deep breaths. The primary focus is on the lateral (side-to-side) and posterior (back) expansion, which is often neglected in shallow breathing. Benefits of three-dimensional breathing include enhanced oxygen intake, improved respiratory efficiency, and reduced stress. This technique can also support better posture and core strength by engaging the diaphragm and intercostal muscles. It is commonly practiced in yoga, Pilates, and physical therapy to increase body awareness and overall respiratory health."
        />
        <BCard
          title="4-7-8 Breathing Technique"
          description="The 4-7-8 Breathing Technique, developed by Dr. Andrew Weil, is a simple yet powerful relaxation exercise. It involves inhaling through the nose for 4 seconds, holding the breath for 7 seconds, and exhaling slowly through the mouth for 8 seconds. This practice helps calm the nervous system and reduce stress by promoting oxygen exchange and regulating breath. The technique can improve sleep quality, reduce anxiety, and lower blood pressure by encouraging a slower, more deliberate breathing pattern. Additionally, it can help manage cravings and control emotional responses, making it a valuable tool for overall mental and physical health."
        />
      </div>
    </>
  );
}

export default BAudios;
