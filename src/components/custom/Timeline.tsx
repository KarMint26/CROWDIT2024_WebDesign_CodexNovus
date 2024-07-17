type TypeData = {
  data: Array<string>;
};
function Timeline({ data }: TypeData) {
  return (
    <ol className="relative my-5 lg:my-10 mx-5 border-s-4 border-gray-200">
      {data.map((item) => (
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 ring-secondaryColor bg-mainColor rounded-full -start-[14px] ring-4"></span>
          <p className="ml-3 flex items-center mb-1 text-sm lg:text-lg text-white">
            {item}
          </p>
        </li>
      ))}
    </ol>
  );
}

export default Timeline;
