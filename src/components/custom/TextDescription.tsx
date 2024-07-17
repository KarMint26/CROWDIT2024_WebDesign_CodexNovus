type typeText = {
  value: string;
};
function TextDescription({ value }: typeText) {
  return <p className="text-sm md:text-base lg:text-[1.25rem]">{value}</p>;
}

export default TextDescription;
