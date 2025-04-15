import { MyContext } from "@/App";
import { HeaderProps } from "@/types/types";
import { useContext, useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useLocation, useNavigate } from "react-router";

const Header: React.FC<HeaderProps> = ({ handleContentChange }) => {
  const [animationClass, setAnimationClass] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const context = useContext(MyContext);

  if (!context) {
    throw new Error(
      "The Header component should be used within MyContext.Provider."
    );
  }

  const { theme, setTheme } = context;

  const handleNavigation = (path: string) => {
    if (handleContentChange) {
      handleContentChange(path === "/" ? "home" : "work");
    } else {
      navigate(path);
    }
  };

  const toggleTheme = () => {
    setAnimationClass("animate__animated animate__bounceInDown animate__fast");

    setTimeout(() => {
      setAnimationClass("");
    }, 1000);

    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("dark", "light");
    root.classList.add(theme);
  }, [theme]);

  return (
    <nav className="w-full backdrop-blur-lg fixed text-white/80 dark:text-gray-800 z-50 dark:bg-white/25">
      <div className="w-[768px] h-[56px] flex mx-auto px-2">
        <div className="flex min-w-full gap-12 h-[40px] my-auto ">
          <div className="flex justify-between w-full my-auto">
            <div className="flex gap-x-4 my-auto">
              <h1 className="font-bold text-lg flex mr-4">
                <button
                  className=" cursor-pointer"
                  onClick={() => handleNavigation("/")}
                >
                  Edgar Grishin
                </button>
              </h1>

              <div className=" flex ">
                <button
                  onClick={() => handleNavigation("/works")}
                  className={`hover:underline  cursor-pointer p-2 ${
                    location.pathname === "/works"
                      ? "bg-[#81e6d9] text-black "
                      : ""
                  }`}
                >
                  Works
                </button>
              </div>

              <a
                href="https://github.com/wlr1/homepage"
                className="hover:underline flex gap-1 my-auto"
                target="_blank"
              >
                <FaGithub className="my-auto" size={13} />
                <span>Source</span>
              </a>
            </div>

            <div
              className={`bg-amber-500 rounded-md h-[40px] w-[40px] flex my-auto cursor-pointer ${animationClass} ${
                theme === "dark" ? "bg-indigo-400 " : ""
              }`}
              onClick={toggleTheme}
            >
              {theme === "light" ? (
                <MdOutlineLightMode
                  size={23}
                  color="black"
                  className="m-auto"
                />
              ) : (
                <MdDarkMode size={23} color="white" className="m-auto" />
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
