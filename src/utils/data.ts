import { Mood1, Mood2, Mood3, Mood4, Mood5, Mood6, Mood7, Mood8, SoundImg1, SoundImg2, SoundImg3, SoundImg4, SoundImg5, SoundImg6, SoundImg7, SoundImg8 } from ".";

export const listTextTutorialDJ = [
  "Write down the details of your dream",
  "select the date when the dream occurred",
  "press the Get Interpretation button and the results will appear",
  "You can see all your dream interpretation result history ",
];

export const listTextTutorialBreathing = [
  "Choose how many minutes you want to do the breathing",
  "Audio Will Automatically Play",
  "Follow the instructions on the screen",
];

export let listDreamInterpretations = [
  {
    id: 1,
    date: "10/07/2024",
    dream:
      "I woke up in a cold sweat, heart pounding. The dream had been so vivid. I was trapped in a dark, endless forest, the trees closing in around me. I could hear footsteps behind me, but every time I turned, no one was there. My legs felt like lead, and every step was a struggle. Suddenly, I stumbled upon an old, abandoned house. Desperate for safety, I went inside, but the door slammed shut behind me. The air turned icy, and whispers filled the room. Shadows danced on the walls, and I realized I wasn't alone. I tried to scream, but no sound came out.",
    interpret: `Dreams can be a reflection of our waking life experiences and emotions. Here's a scientific breakdown of your dream: Feelings of being chased or stuck in a dark forest could indicate stress or unresolved issues. Abandoned houses, whispers, and shadows symbolize anxieties and fears. Difficulty moving or screaming points to struggles with expressing yourself or feeling stuck. Physiological responses like sweating can occur during vivid dreams.  Overall, your dream suggests addressing stress, anxieties, and finding ways to express yourself more effectively.`,
  },
  {
    id: 2,
    date: "09/07/2024",
    dream:
      "I was in a meadow bathed in golden sunlight, surrounded by vibrant wildflowers. The air was filled with the sweet scent of blooming flowers and the gentle hum of bees. I wandered through the field, feeling the soft grass beneath my feet. In the distance, a crystal-clear stream glistened, and I walked towards it, feeling an overwhelming sense of peace. Birds sang melodious tunes from the trees, and butterflies danced around me. I dipped my toes in the cool water, and a warm breeze caressed my face. The world felt perfect, serene, and timeless. I wished I could stay there forever.",
    interpret: `Your serene meadow dream, a stark contrast to the previous one, suggests a shift towards positive emotions and tranquility. Sunlight, wildflowers, and pleasant sensations symbolize happiness, growth, and emotional well-being. Walking barefoot on soft grass and seeing a clear stream reflect a desire for freedom, simplicity, and inner peace. The presence of nature (birds, butterflies, warm breeze, cool water) signifies a connection with the natural world, emotional balance, and serenity. The timeless and serene feeling suggests a longing for enduring peace. Overall, this dream indicates emotional balance, contentment, and a potential desire for more peace and simplicity in your life. Activities connecting you with nature and promoting calmness could be beneficial.`,
  },
  {
    id: 3,
    date: "08/07/2024",
    dream:
      "I was standing on the edge of a towering cliff, the ocean roaring below. The wind howled around me, and I could feel the ground crumbling beneath my feet. I tried to step back, but invisible hands pushed me closer to the edge. I looked down and saw the waves crashing violently against the rocks. My heart raced as I teetered on the brink. Suddenly, a voice whispered my name, and I turned to see a shadowy figure looming behind me. They reached out, and I lost my balance, plummeting into the abyss. I woke up just before hitting the water, drenched in sweat.",
    interpret: `Your cliffside dream, with its falling sensation and vast ocean, suggests potential stress and fear. Standing on the edge signifies feeling overwhelmed, while the ocean represents powerful emotions. Crumbling ground and unseen forces symbolize instability and external pressures. Teetering on the brink reflects a fear of losing control, and shadowy figures represent unconfronted fears. The falling sensation, sweat, and waking up are likely physiological responses to dream-induced anxiety. Overall, this dream indicates you might be dealing with significant stress or unresolved fears. Identifying stress sources and practicing relaxation techniques could be beneficial.`,
  },
  {
    id: 4,
    date: "07/07/2024",
    dream:
      "I found myself in a quaint village nestled in the hills, where cobblestone streets wound through charming houses with flower boxes. The sky was a brilliant blue, and the sun shone warmly. I walked through the market square, where vendors sold fresh produce and handmade crafts. Laughter and music filled the air. I felt a sense of belonging, greeted by friendly faces at every turn. As I strolled towards the village's edge, I discovered a hidden garden filled with blooming roses and a gentle fountain. I sat on a bench, savoring the tranquility and joy, feeling completely at ease and happy.",
    interpret: `Your quaint village dream, filled with friendly faces, sunshine, and blooming roses, suggests feelings of contentment and peace. The village symbolizes community and belonging, while the vibrant market square reflects joy and social interaction. Clear skies and warm sun represent positivity and happiness. Discovering a hidden garden signifies inner beauty and self-love. Cobblestone streets and charming houses evoke nostalgia and comfort, while handmade crafts highlight appreciation for authenticity. Sitting by the fountain suggests relaxation and self-care. Overall, this dream indicates emotional and mental well-being, a strong sense of community, and a desire for simple pleasures. Nurture your relationships, seek joyful activities, and prioritize self-care to maintain this positive state.`,
  },
];

export const listMood = [
  {
    id: 1,
    numberImg: Mood1,
    delay: 50,
    name: "Anxious",
  },
  {
    id: 2,
    numberImg: Mood2,
    delay: 150,
    name: "Calm",
  },
  {
    id: 3,
    numberImg: Mood3,
    delay: 250,
    name: "Fear",
  },
  {
    id: 4,
    numberImg: Mood4,
    delay: 350,
    name: "Frustated",
  },
  {
    id: 5,
    numberImg: Mood5,
    delay: 450,
    name: "Happy",
  },
  {
    id: 6,
    numberImg: Mood6,
    delay: 550,
    name: "Loneliness",
  },
  {
    id: 7,
    numberImg: Mood7,
    delay: 650,
    name: "Sad",
  },
  {
    id: 8,
    numberImg: Mood8,
    delay: 750,
    name: "Tired",
  },
];

// delays for page breathing
export const delays = [0, 50, 100, 150];

// data for: diaphragmatic breathing
export const datasd: { start: number; end: number; text: string }[] = [];
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
export const datasrb: { start: number; end: number; text: string }[] = [];
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
export const datastd: { start: number; end: number; text: string }[] = [];
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
export const datas478: { start: number; end: number; text: string }[] = [];
for (let i = 0; i < 300; i += 19) {
  datas478.push({ start: i, end: i + 3, text: "Tarik Napas" });
  datas478.push({ start: i + 4, end: i + 10, text: "Tahan Napas" });
  datas478.push({ start: i + 11, end: i + 18, text: "Buang Napas" });
}
export const dataCardBreath = [
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

export const soundList = [
  {
    id: 1,
    name: "Bird Song",
    img: SoundImg1,
    delay: 50,
    audio: "/assets/audio/birdsong.mp3"
  },
  {
    id: 2,
    name: "Forest Lullaby",
    img: SoundImg2,
    delay: 150,
    audio: "/assets/audio/forest-lullaby.mp3"
  },
  {
    id: 3,
    name: "Night Sound",
    img: SoundImg3,
    delay: 250,
    audio: "/assets/audio/night-sound.mp3"
  },
  {
    id: 4,
    name: "Ocean Waves",
    img: SoundImg4,
    delay: 350,
    audio: "/assets/audio/ocean-waves.mp3"
  },
  {
    id: 5,
    name: "Sleepy Rain",
    img: SoundImg5,
    delay: 450,
    audio: "/assets/audio/sleepy-rain.mp3"
  },
  {
    id: 6,
    name: "Stream",
    img: SoundImg6,
    delay: 550,
    audio: "/assets/audio/stream.mp3"
  },
  {
    id: 7,
    name: "Waterfall",
    img: SoundImg7,
    delay: 650,
    audio: "/assets/audio/waterfall.mp3"
  },
  {
    id: 8,
    name: "Wind",
    img: SoundImg8,
    delay: 750,
    audio: "/assets/audio/wind.mp3"
  },
];