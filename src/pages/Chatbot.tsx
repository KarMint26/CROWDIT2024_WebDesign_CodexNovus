import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { heroHomepage1, Icon } from "@/utils";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaBars, FaHome } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { BiSolidSend, BiSolidBot, BiSolidUser } from "react-icons/bi";
import { Tooltip } from "react-tooltip";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import CardLinkChatbot from "@/components/custom/CardLinkChatbot";

interface Chat {
  id: number;
  type: "bot" | "user";
  prompt: string;
  isLoading: boolean;
  error: string | null;
}

const Chatbot: React.FC = () => {
  const [sideBar, setSideBar] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [nextId, setNextId] = useState(2);
  const [errMessage, setErrorMessage] = useState<string | null>(null);
  const [listChat, setListChat] = useState<Chat[]>([
    {
      id: 1,
      type: "bot",
      prompt: "Hi!, welcome to nocturn chatbot. you have any question?",
      isLoading: false,
      error: null,
    },
  ]);

  const markdownRefs = useRef<Record<number, HTMLElement>>({});
  const isTyping = useRef<Record<number, boolean>>({});
  const latestBotChatId = useRef<number | null>(null);

  React.useEffect(() => {
    const latestBotChat = listChat.find(
      (chat: any) => chat.type === "bot" && !chat.isLoading && !chat.error
    );

    if (latestBotChat && latestBotChat.id !== latestBotChatId.current) {
      latestBotChatId.current = latestBotChat.id; // Simpan ID chat bot terbaru
      isTyping.current[latestBotChat.id] = true;

      let chars = latestBotChat.prompt.split("");
      let index = 0;
      const typingInterval = setInterval(() => {
        if (markdownRefs.current[latestBotChat.id]) {
          markdownRefs.current[latestBotChat.id].innerHTML = chars
            .slice(0, index)
            .join("");
          index++;
          if (index > chars.length) {
            clearInterval(typingInterval);
            isTyping.current[latestBotChat.id] = false;
          }
        }
      }, 50); // Kecepatan mengetik (ms)
    }
  }, [listChat]); // Memicu useEffect setiap kali listChat berubah

  const getResponseFromAPI = async (prompts: any) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_GPT_URL}/gpt4`,
        {
          messages: [{ role: "user", content: prompts }],
          web_access: false,
        },
        {
          headers: {
            "x-rapidapi-key": import.meta.env.VITE_RAPID_API_GPT_KEY,
            "x-rapidapi-host": import.meta.env.VITE_RAPID_API_GPT_HOST,
            "Content-Type": "application/json",
          },
        }
      );
      return response.data.result;
    } catch (error) {
      throw error;
    }
  };

  const handleResponse = (res: any, targetId: any) => {
    setListChat((prevListChat) => {
      return prevListChat.map((chat) => {
        if (chat.id === targetId) {
          return {
            ...chat,
            prompt: res,
            isLoading: false,
            error: null,
          };
        } else {
          return chat;
        }
      });
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const newChat = {
      id: nextId,
      type: "user",
      prompt: prompt,
      isLoading: false,
      error: null,
    };
    setListChat((chat: any) => [...chat, newChat]);
    setPrompt("");
    setNextId((prevId) => (prevId += 1));

    const chatbot = {
      id: nextId + 1,
      type: "bot",
      prompt: "",
      isLoading: true,
      error: null,
    };
    setListChat((chat: any) => [...chat, chatbot]);
    setNextId((prevId) => (prevId += 1));

    const getData = getResponseFromAPI(prompt);

    getData
      .then((data) => {
        console.log(data);
        handleResponse(data, nextId + 1);
      })
      .catch((err) => {
        setErrorMessage(`Error: ${err.message}`);
        setListChat((prevListChat) => {
          return prevListChat.map((chat) => {
            if (chat.id === nextId + 1) {
              return {
                ...chat,
                prompt: "",
                isLoading: false,
                error: err.message,
              };
            } else {
              return chat;
            }
          });
        });
      });
  };

  return (
    <React.Fragment>
      <div className="flex justify-between items-center">
        <div
          className={`sidebar fixed z-[999] ${
            !sideBar ? "-translate-x-[400px]" : "translate-x-0"
          } lg:translate-x-0 left-0 top-0 lg:translate-y-0 flex justify-between items-center flex-col px-6 lg:px-10 py-8 h-screen bg-slate-800 border-r-2 border-slate-500 transition text-white`}
        >
          <div className="title-sidebar">
            <div className="nav-brand flex justify-center items-center gap-2 sm:gap-5">
              <img src={Icon} alt="icon" className="w-10 sm:w-[3rem]" />
              <Link
                to="#"
                className="text-lg sm:text-2xl font-semibold uppercase text-white"
              >
                Nocturn
                <span className="text_purple">AI</span>
              </Link>
              <IoCloseSharp
                className="text-2xl cursor-pointer lg:hidden"
                onClick={() => setSideBar((prev) => !prev)}
              />
            </div>
          </div>
          <div className="content flex justify-center items-center flex-col gap-3 -translate-y-[3rem] lg:translate-y-0">
            <img src={heroHomepage1} alt="hero" className="w-44" />
            <p className="text-sm font-semibold">Nocturn Social Media</p>
            <CardLinkChatbot
              LinkUrl="#"
              Icon={<BsGithub />}
              CardName="Github"
            />
            <CardLinkChatbot
              LinkUrl="#"
              Icon={<BsLinkedin />}
              CardName="LinkedIn"
            />
            <CardLinkChatbot
              LinkUrl="#"
              Icon={<BsInstagram />}
              CardName="Instagram"
            />
          </div>
          <footer className="text-xs font-bold -translate-y-[2.5rem] lg:translate-y-0">
            Supported By{" "}
            <Link
              to="https://openai.com"
              target="_blank"
              className="text_purple"
            >
              OPENAI
            </Link>
          </footer>
        </div>
        {/* Helper to Centering topbar */}
        <div
          className={`sidebar fixed ${
            !sideBar ? "-translate-x-[400px]" : "translate-x-0"
          } lg:translate-x-0 left-0 top-0 lg:translate-y-0 lg:relative hidden lg:flex justify-between items-center flex-col px-6 lg:px-[3.4rem] py-8 h-screen bg-slate-800 border-r-2 border-slate-500 transition text-white`}
        >
          <div className="title-sidebar">
            <div className="nav-brand flex justify-center items-center gap-2 sm:gap-5">
              <img src={Icon} alt="icon" className="w-10 sm:w-[3rem]" />
              <Link
                to="#"
                className="text-lg sm:text-2xl font-semibold uppercase text-white"
              >
                Nocturn
                <span className="text_purple">AI</span>
              </Link>
              <IoCloseSharp
                className="text-2xl cursor-pointer lg:hidden"
                onClick={() => setSideBar((prev) => !prev)}
              />
            </div>
          </div>
          <div className="content flex justify-center items-center flex-col gap-3 -translate-y-[3rem] lg:translate-y-0">
            <img src={heroHomepage1} alt="hero" className="w-44" />
            <p className="text-sm font-semibold">Developer Social Media</p>
            <CardLinkChatbot
              LinkUrl="#"
              Icon={<BsGithub />}
              CardName="Github"
            />
            <CardLinkChatbot
              LinkUrl="#"
              Icon={<BsLinkedin />}
              CardName="LinkedIn"
            />
            <CardLinkChatbot
              LinkUrl="#"
              Icon={<BsInstagram />}
              CardName="Instagram"
            />
          </div>
          <footer className="text-xs font-bold -translate-y-[2.5rem] lg:translate-y-0">
            Supported By{" "}
            <Link
              to="https://openai.com"
              target="_blank"
              className="text_purple"
            >
              OPENAI
            </Link>
          </footer>
        </div>

        <div className="chatbot-field self-start w-full">
          <div className="top-bar sticky top-0 z-[99] flex justify-between items-center py-4 px-5 sm:py-5 sm:px-6 bg-background shadow shadow-slate-500">
            <div className="left-side flex justify-center items-center gap-4">
              <FaBars
                className="text-2xl cursor-pointer lg:hidden"
                onClick={() => setSideBar((prev) => !prev)}
              />
              <Link
                to="/"
                className="nav-brand flex justify-center items-center gap-2 sm:gap-5 translate-x-3"
              >
                <h1 className="text-lg sm:text-xl font-semibold uppercase">
                  <span className="sm:inline-block hidden">Hi! Welcome to</span>{" "}
                  Nocturn
                  <span className="text_purple">AI</span>
                </h1>
              </Link>
            </div>
            <div className="list-nav flex justify-center items-center gap-4 sm:gap-8">
              <Link to={"/"} className="gbtn">
                <FaHome />
                Home
              </Link>
              <Tooltip
                anchorSelect=".gbtn"
                place="bottom"
                style={{
                  backgroundColor: "rgb(100, 116, 139)",
                  borderRadius: "0.5rem",
                  marginTop: "0.5rem",
                }}
              >
                Back to Homepage
              </Tooltip>
            </div>
          </div>
          <div className="Field-Input px-8 sm:px-20 py-12 pb-40 flex justify-center items-start flex-col">
            <div className="list-chat flex justify-center items-start gap-6 flex-col">
              {listChat &&
                listChat.map((chat) => (
                  <div key={chat.id}>
                    {chat.type === "bot" ? (
                      <>
                        <div
                          key={chat.id}
                          className="box-chat p-3 rounded-lg flex justify-start items-center gap-3 bg-gray-700"
                        >
                          <div className="icon-box self-start p-2 flex justify-center items-center rounded-lg bg-purple-500">
                            <BiSolidBot className="text-white text-2xl" />
                          </div>
                          <div
                            className="chat-field relative top-0"
                            ref={(el: any) =>
                              (markdownRefs.current[chat.id] = el)
                            }
                          >
                            {chat.isLoading ? (
                              <>
                                <div className="flex justify-center item-center gap-2">
                                  <div className="custom-loader"></div>
                                  <h1 className="leading-[35px]">
                                    Thinking...
                                  </h1>
                                </div>
                              </>
                            ) : chat.error !== null ? (
                              <>
                                <h1>{errMessage}</h1>
                              </>
                            ) : (
                              <>
                                <ReactMarkdown
                                  remarkPlugins={[remarkGfm]}
                                  disallowedElements={[]}
                                >
                                  {chat.prompt}
                                </ReactMarkdown>
                              </>
                            )}
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div
                          key={chat.id}
                          className="box-chat p-3 rounded-lg flex justify-start items-center gap-3"
                        >
                          <div className="icon-box self-start p-2 flex justify-center items-center rounded-lg bg-fuchsia-500">
                            <BiSolidUser className="text-white text-2xl" />
                          </div>
                          <div className="chat-field">{chat.prompt}</div>
                        </div>
                      </>
                    )}
                  </div>
                ))}
            </div>
            <form
              onSubmit={handleSubmit}
              className="prompt-field bg-background transition duration-300 fixed bottom-0 w-[84%] sm:w-[79.5%] lg:w-[73%] h-28 z[88]"
            >
              <input
                type="text"
                name="prompt"
                id="prompt"
                placeholder="Your message"
                className="w-full px-5 py-3 pr-10 rounded-2xl outline-none text-slate-200 bg-gray-700 ring-2 ring-slate-400 transition duration-300"
                onChange={({ target }) => setPrompt(target.value)}
                value={prompt}
                autoComplete="off"
              />
              <button
                type="submit"
                disabled={prompt.length >= 1 ? false : true}
              >
                <BiSolidSend
                  className={`absolute right-4 ${
                    prompt.length >= 1
                      ? "cursor-pointer text-slate-200"
                      : "text-slate-400"
                  } text-2xl top-3`}
                />
              </button>
              <p className="text-center translate-y-7 text-[0.65rem] sm:text-xs font-normal">
                This Chatbot Was Developed By{" "}
                <a className="text_purple font-bold" href="#" target="_blank">
                  Codex Novus.
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Chatbot;
