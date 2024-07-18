import React, { ChangeEvent } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

interface CustomInputProps {
  onchange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder: string;
  isPwd: boolean;
}

const CustomInput = ({
  isPwd,
  value,
  placeholder,
  onchange,
}: CustomInputProps) => {
  const [hide, setHide] = React.useState(true);

  return (
    <div className="relative w-full">
      <input
        className="input-custom w-full hover:border-mainColor border-4 transition duration-300 rounded-3xl bg-[#EEEEEE] justify-center items-center relative px-5 py-3 text-black text-center focus:border-mainColor placeholder:text-[#8f8e8e] pr-10"
        type={hide && isPwd ? "password" : "text"}
        placeholder={placeholder}
        value={value}
        onChange={onchange}
      />
      {isPwd && (
        <button
          type="button"
          onClick={() => setHide(!hide)}
          className="absolute right-5 top-1/2 -translate-y-1/2 text-black"
        >
          {hide ? (
            <IoIosEyeOff className="text-2xl" />
          ) : (
            <IoIosEye className="text-2xl" />
          )}
        </button>
      )}
    </div>
  );
};

export default CustomInput;
