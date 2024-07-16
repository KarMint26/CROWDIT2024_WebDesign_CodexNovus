import { Link } from "react-router-dom";
import { FiFacebook } from "react-icons/fi";
import {
  FaBookJournalWhills,
  FaGithub,
  FaInstagram,
  FaLungs,
  FaRegCopyright,
  FaYoutube,
} from "react-icons/fa6";
import { Icon } from "@/utils";
import { BsSoundwave } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="w-full h-fit bg-[#563B71] pt-4 pb-0 lg:py-6 flex justify-center lg:justify-normal items-center flex-col">
      <div className="flex justify-between items-center w-full px-3 sm:px-5 lg:px-7 gap-2 sm:gap-5">
        <Link to="/" className="w-fit h-fit">
          <img
            src={Icon}
            alt="nocturn-icon"
            className="w-24 sm:w-28"
          />
        </Link>
        <div className="content-footer flex flex-col w-full gap-2 sm:gap-3 lg:gap-4 text-white">
          <div className="top-menu border-b border-white py-2 pb-3 sm:pb-4 flex justify-between items-center mb-2">
            <div className="nav-menu flex justify-center items-center gap-3 sm:gap-4 lg:gap-6 text-[0.65rem] sm:text-base lg:text-lg">
              <Link className="flex items-center gap-2 sm:gap-3" to="/dream-journal">
                <FaBookJournalWhills />
                Dream Journal
              </Link>
              <Link className="flex items-center gap-2 sm:gap-3" to="/soundscapes">
                <BsSoundwave />
                Soundscapes
              </Link>
              <Link className="flex items-center gap-2 sm:gap-3" to="/breathing">
                <FaLungs />
                Breathing
              </Link>
            </div>
            <div className="social-media hidden lg:flex justify-center items-center gap-4 lg:gap-5 text-lg sm:text-xl lg:text-2xl">
              <Link
                target="_blank"
                to="https://www.facebook.com/people/Tech-Titans/61556895187086"
              >
                <FiFacebook className="cursor-pointer" />
              </Link>
              <Link target="_blank" to="https://instagram.com/tim_techtitans">
                <FaInstagram className="cursor-pointer" />
              </Link>
              <Link target="_blank" to="https://github.com/TimTechTitans">
                <FaGithub className="cursor-pointer" />
              </Link>
              <Link
                target="_blank"
                to="https://www.youtube.com/channel/UCDHjdGU4sZg3sA35-iagQkA"
              >
                <FaYoutube className="cursor-pointer" />
              </Link>
            </div>
          </div>
          <div className="copyright-wide hidden lg:flex items-center gap-1 sm:gap-2 text-xs sm:text-base lg:text-lg">
            <FaRegCopyright className="font-bold" />
            <div>
              2024 by <span className="font-bold">Codex Novus</span> - WD CrowdIT
            </div>
          </div>
          <div className="social-media flex lg:hidden items-center gap-2 sm:gap-4 text-base sm:text-2xl">
            <Link
              target="_blank"
              to="https://www.facebook.com/people/Tech-Titans/61556895187086"
            >
              <FiFacebook className="cursor-pointer" />
            </Link>
            <Link target="_blank" to="https://instagram.com/tim_techtitans">
              <FaInstagram className="cursor-pointer" />
            </Link>
            <Link target="_blank" to="https://github.com/TimTechTitans">
              <FaGithub className="cursor-pointer" />
            </Link>
            <Link
              target="_blank"
              to="https://www.youtube.com/channel/UCDHjdGU4sZg3sA35-iagQkA"
            >
              <FaYoutube className="cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
      <div className="copyright lg:hidden py-2 sm:py-3 bg-bgPurpleDark flex items-center gap-1 sm:gap-2 text-[0.7rem] sm:text-base lg:text-lg text-white mt-5 w-full justify-center">
        <FaRegCopyright className="font-bold" />
        <div>
          2024 by <span className="font-bold">Codex Novus</span> - WD CrowdIT
        </div>
      </div>
    </div>
  );
}
