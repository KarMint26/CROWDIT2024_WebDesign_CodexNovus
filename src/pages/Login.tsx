import CustomInput from "@/components/auth/CustomInput";
import CustomButton from "@/components/custom/CustomButton";
import { UserAuth } from "@/contexts/AuthContext";
import { HeroAuth2, LoadingAuth, LongIcon } from "@/utils";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import AOS from "aos";

const Login = () => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);
  const navigate = useNavigate();

  const { googleSignIn, signIn, error, user } = UserAuth();

  const notify = (msg: string) => {
    if (msg === "Wrong username or password") {
      toast.error(msg, {
        position: "top-right",
        theme: "colored",
        className: "font-semibold",
      });
    } else {
      setTimeout(() => {
        toast.success(msg, {
          position: "top-right",
          theme: "colored",
          className: "font-semibold",
        });
      }, 2000);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleSignIn();
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const handleLogin = async () => {
    if (email !== "" && password !== "") {
      try {
        await signIn(email, password);
        if (error !== null) {
          setLoading(true);
          setTimeout(() => {
            navigate("/");
          }, 3000);
        }
      } catch (error: any) {
        console.log(error.message);
      }
    } else {
      toast.warning("All forms to register must be filled in", {
        position: "top-right",
        theme: "colored",
        className: "font-semibold",
      });
    }
  };

  React.useEffect(() => {
    if (error) {
      toast.error("Login error, wrong email or password", {
        position: "top-right",
        theme: "colored",
        className: "font-semibold",
      });
    } else if (error === null && user !== null) {
      notify("Login success");
    }
    if (user !== null) {
      setLoading(true);
      setTimeout(() => {
        navigate("/");
        setLoading(false);
      }, 3000);
    }
  }, [user, error]);

  React.useEffect(() => {
    AOS.init({
      once: true,
      duration: 1500,
    });
  }, []);

  return (
    <React.Fragment>
      <ToastContainer />
      {loading && (
        <div className="loading-container fixed w-screen h-screen bg-background/50 backdrop-blur-md flex justify-center items-center z-[10]">
          <img src={LoadingAuth} alt="loading" className="scale-75" />
        </div>
      )}
      <div className="flex flex-row-reverse justify-center items-center overflow-hidden">
        <div className="w-[50%] h-screen bg-bgPurpleDark lg:flex justify-center items-center hidden">
          <img
            data-aos="fade-up"
            data-aos-delay="100"
            src={HeroAuth2}
            alt="hero-auth"
          />
        </div>
        <div className="w-[100%] lg:w-[50%] h-screen flex justify-center items-center relative">
          {/* Decoration */}
          <div className="ball bg-bgPurpleDark rounded-full w-[150px] h-[150px] absolute -right-[20%] -top-[12%] sm:-right-[10%] sm:-top-[10%] lg:-left-[10%]"></div>

          <div className="ball hidden lg:block bg-bgPurpleDark rounded-full w-[150px] h-[150px] absolute -left-[10%] -bottom-[10%]"></div>

          <div className="ball block lg:hidden bg-bgPurpleDark rounded-full w-[150px] h-[150px] absolute -left-[20%] -bottom-[12%] sm:-left-[10%] sm:-bottom-[10%]"></div>

          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="form-container w-[300px] lg:w-[350px] flex flex-col justify-center items-center gap-3"
          >
            <Link to="/">
              <img src={LongIcon} alt="long-icon" />
            </Link>
            <h1 className="font-semibold text-xl sm:text-2xl text-[#EEEEEE] mb-2">
              Sleep With Nocturn
            </h1>
            <div
              onClick={() => handleGoogleLogin()}
              className="input-custom w-full hover:border-mainColor border-4 transition duration-300 rounded-3xl bg-[#EEEEEE] justify-center items-center relative px-5 py-3 text-black text-center cursor-pointer"
            >
              <FcGoogle className="text-3xl absolute left-3 top-[50%] -translate-y-[50%]" />
              Login With Google
            </div>
            <div className="relative w-[95%] h-2 border-t-2 border-[#D9D9D9] mt-2">
              <div className="absolute right-[50%] translate-x-[50%] top-[75%] -translate-y-[75%] bg-background px-2 text-[#EEEEEE]">
                Or With
              </div>
            </div>

            <CustomInput
              placeholder="Your Email"
              isPwd={false}
              value={email}
              onchange={({ target }) => setEmail(target.value)}
            />
            <CustomInput
              placeholder="Password"
              isPwd={true}
              value={password}
              onchange={({ target }) => setPassword(target.value)}
            />

            <CustomButton
              bgcolor="bg-bgPurpleDark"
              bordercolor="border-mainColor"
              path="#"
              text="Login"
              textcolor="text-white"
              customclass="self-start text-[0.9rem] sm:text-base mt-2 w-[100px] sm:w-[120px] text-center border-2"
              onclick={() => handleLogin()}
            />
            <p className="self-start text-sm sm:text-base">
              Don't have an account?{" "}
              <Link to="/register" className="text-mainColor font-semibold">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
