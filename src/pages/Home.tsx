import CustomButtonWithIcon from "@/components/custom/CustomButtonWithIcon";
import React from "react";
import { FaMapPin } from "react-icons/fa6";

const Home = () => {
  return (
    <React.Fragment>
      <div className="w-full h-fit">
        <div>
          <CustomButtonWithIcon
            text="Explore More"
            icon={<FaMapPin />}
            bgcolor="bg-mainColor"
            textcolor="text-white"
            bordercolor="border-secondaryColor"
            path="#"
            customclass="w-[9rem] sm:w-[11rem]"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
