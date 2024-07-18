import BAudios from "@/components/Breathing/BAudios";
import BHero from "@/components/Breathing/BHero";
import BTutorial from "@/components/Breathing/BTutorial";
import DefaultView from "@/components/custom/DefaultView";

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
    </div>
  );
};

export default Breathing;
