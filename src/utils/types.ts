export type TypeDataDream = {
  id: number;
  date: string;
  dream: string;
  interpret: string;
};

export type TypeHistory = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setDataDream: React.Dispatch<React.SetStateAction<TypeDataDream>>;
};

export type TypeBCard = {
  title: string;
  description: string;
  delay: number;
  setActive: React.Dispatch<React.SetStateAction<string>>;
  active: string;
  timeRanges: { start: number; end: number; text: string }[];
};

export type TypeButtonTime = {
  minuteActive: number;
  text: string;
  handleClick: () => void;
};
