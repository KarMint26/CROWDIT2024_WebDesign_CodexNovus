import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LongIcon } from "@/utils";
import ListItem from "./ListItem";
import { FaBookJournalWhills, FaLungs } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { Menu, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BsSoundwave } from "react-icons/bs";
import CustomButton from "./CustomButton";
import { UserAuth } from "@/contexts/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { IoLogOut } from "react-icons/io5";

const Navbar = () => {
  const location = useLocation();
  const activeLink = location.pathname.split("/").pop();
  const [activeNav, setActiveNav] = useState<boolean>(false);
  const [openProfile, setOpenProfile] = useState<boolean>(false);
  const navigate = useNavigate();
  const { user, logOut } = UserAuth();

  const [avatarUrl, setAvatarUrl] = useState("");

  useEffect(() => {
    setAvatarUrl(`https://api.multiavatar.com/${Math.random()}.png`);
  }, []);

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <React.Fragment>
      {/* Mobile and Tablet Version */}
      <div
        onClick={() => setActiveNav(false)}
        className={`dark:bg-black/80 bg-white/80 backdrop-blur-md lg:hidden w-[30%] sm:w-[40%] h-screen fixed right-0 top-0 z-[1000] transition-all duration-300 ${
          activeNav
            ? "opacity-100 -translate-x-0"
            : "opacity-0 -translate-x-[1200px]"
        }`}
      ></div>
      <div
        className={`popup-menu flex lg:hidden flex-col pt-16 fixed left-0 top-0 h-screen w-[70%] sm:w-[60%] sm:text-xl bg-background z-[1000] space-y-8 transition-all duration-300 ${
          activeNav
            ? "opacity-100 -translate-x-0"
            : "opacity-0 -translate-x-[1200px]"
        }`}
      >
        <Button
          variant="outline"
          size="icon"
          className={`flex lg:hidden fixed top-6 right-[30px] ${
            activeNav
              ? "opacity-100 -translate-x-0"
              : "opacity-0 -translate-x-[600px]"
          }`}
          onClick={() => setActiveNav(false)}
        >
          <XCircle color="#A84DB5" />
        </Button>
        <Link
          to="/"
          onClick={() => setActiveNav(false)}
          className="list-menu text-mainColor flex py-2 pl-[15%] sm:pl-[35%] items-center space-x-2 sm:space-x-4 uppercase font-semibold"
        >
          <FaHome className="text-lg" />
          <div>Homepage</div>
        </Link>
        <Link
          to="/dream-journal"
          onClick={() => setActiveNav(false)}
          className="list-menu text-mainColor flex py-2 pl-[15%] sm:pl-[35%] items-center space-x-2 sm:space-x-4 uppercase font-semibold"
        >
          <FaBookJournalWhills className="text-lg" />
          <div>Dream Journal</div>
        </Link>
        <Link
          to="/soundscapes"
          onClick={() => setActiveNav(false)}
          className="list-menu text-mainColor flex py-2 pl-[15%] sm:pl-[35%] items-center space-x-2 sm:space-x-4 uppercase font-semibold"
        >
          <BsSoundwave className="text-lg" />
          <div>Soundscapes</div>
        </Link>
        <Link
          to="/breathing"
          onClick={() => setActiveNav(false)}
          className="list-menu text-mainColor flex py-2 pl-[15%] sm:pl-[35%] items-center space-x-2 sm:space-x-4 uppercase font-semibold"
        >
          <FaLungs className="text-lg" />
          <div>Breathing</div>
        </Link>
      </div>

      <div className="fixed top-0 w-full h-fit px-4 py-3 bg-background z-[999] flex justify-between items-center">
        <div className="nav-brand flex justify-center items-center">
          <Button
            variant="outline"
            size="icon"
            className="relative flex translate-x-2 lg:hidden lg:translate-x-0 z-10"
            onClick={() => setActiveNav((prev) => !prev)}
          >
            <Menu />
          </Button>
          <Link to="/">
            <img
              src={LongIcon}
              alt="Nocturn-icon"
              className="scale-[0.65] sm:scale-75 lg:scale-100 -translate-x-4 sm:translate-x-0"
            />
          </Link>
        </div>
        {/* Desktop Version */}
        <div className="nav-list-menu lg:flex justify-center items-center space-x-4 hidden">
          <ListItem
            activeLink={activeLink}
            text={"Homepage"}
            href="/"
            icon={<FaHome className="text-xl" />}
          />
          <ListItem
            activeLink={activeLink}
            text={"Dream Journal"}
            href="/dream-journal"
            icon={<FaBookJournalWhills className="text-xl" />}
          />
          <ListItem
            activeLink={activeLink}
            text={"Soundscapes"}
            href="/soundscapes"
            icon={<BsSoundwave className="text-xl" />}
          />
          <ListItem
            activeLink={activeLink}
            text={"Breathing"}
            href="/breathing"
            icon={<FaLungs className="text-xl" />}
          />
        </div>

        <div className="relative side-menu flex justify-center items-center space-x-3 lg:space-x-5 mr-2">
          {user !== null ? (
            <>
              <Avatar
                className="cursor-pointer"
                onClick={() => setOpenProfile((prev) => !prev)}
              >
                <AvatarImage src={avatarUrl} />
                <AvatarFallback>User Profile</AvatarFallback>
              </Avatar>
              {openProfile && (
                <>
                  <div className="absolute w-[180px] h-fit right-0 top-[120%] px-4 py-3 bg-bgPurpleDark rounded-lg ring-2 ring-mainColor">
                    <div className="w-full">
                      Welcome {user?.email?.split("@")[0]}!
                    </div>
                    <div className="w-full border-t-2 border-[#DADADA] mt-3 mb-2"></div>
                    <div
                      className="cursor-pointer flex items-center gap-2 mt-2 text-lg font-semibold"
                      onClick={() => handleLogout()}
                    >
                      <IoLogOut />
                      Logout
                    </div>
                  </div>
                </>
              )}
            </>
          ) : (
            <CustomButton
              text="Register Now"
              path="/register"
              bgcolor="bg-white"
              bordercolor="border-secondaryColor"
              textcolor="text-mainColor"
              customclass="w-[120px] text-center sm:w-auto hover:bg-mainColor hover:text-white transition duration-300"
            />
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
