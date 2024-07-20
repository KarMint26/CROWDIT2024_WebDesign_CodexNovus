import BAudios from "@/components/Breathing/BAudios";
import BHero from "@/components/Breathing/BHero";
import BTutorial from "@/components/Breathing/BTutorial";
import DefaultView from "@/components/custom/DefaultView";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "aos/dist/aos.css";

const Breathing = () => {
  return (
    <div className="w-full relative">
      <DefaultView>
        {/* section  hero */}
        <BHero />

        {/* section tutorial */}
        <BTutorial />

        {/* section audio */}
        <BAudios />
      </DefaultView>
      <ToastContainer />
    </div>
  );
};

export default Breathing;
