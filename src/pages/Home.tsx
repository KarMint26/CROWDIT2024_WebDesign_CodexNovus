import React from "react";
import { LongIcon } from "../utils";

const Home = () => {
  return (
    <React.Fragment>
      <img src={LongIcon} alt="long-icon" />
      <div className="font-semibold text-3xl">Home</div>
    </React.Fragment>
  );
};

export default Home;
