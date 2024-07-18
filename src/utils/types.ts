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
