import ThreeModel from "@/utils/ThreeModel/ThreeModel";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdOutlineNavigateNext } from "react-icons/md";
import { Link } from "react-router";
import "animate.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { useTranslation } from "react-i18next";

const HomeContent = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full ">
      <div className="flex justify-center mx-auto min-h-screen w-[768px]  ">
        <Header />
        <div>
          {/* threejs something */}
          <div className=" w-[640px] h-[640px] touch-none -mt-[120px] -mb-[200px] ">
            <ThreeModel />
          </div>
          {/* content */}
          <article className="relative opacity-100  animate__animated animate__fadeInUp  ">
            <div className="flex flex-col justify-center w-[486px]  mx-auto animate__animated animate__fadeIn animate__slower ">
              <div className=" flex justify-center mx-auto p-3 mb-4 w-[486px] rounded-md bg-white/5 dark:bg-white/40 backdrop-blur-lg">
                {t("welcome")}
              </div>
              <div className="flex flex-col gap-1 w-[486px] items-center  ">
                <h2 className="font-bold text-4xl">{t("name")}</h2>
                <p>{t("position")}</p>
              </div>
              <div className=" w-[486px] mb-4">
                <h3 className="font-bold text-xl border-b-4 border-b-white/20 dark:border-b-gray-800/70 w-fit mt-6 mb-2">
                  {t("work")}
                </h3>
                <p className="indent-[1em] hyphens-auto text-justify">
                  {t("workDesc")}
                </p>
                <div className="w-[486px] mt-3 ">
                  <Link
                    to="/works"
                    className="bg-[#81e6d9] h-[40px] w-[146px] flex justify-center items-center mx-auto text-black dark:text-white/90 dark:bg-[#319795] font-semibold rounded-md "
                  >
                    {t("portfolio")}
                    <span className="ml-2 mt-[1px]">
                      <MdOutlineNavigateNext className="my-auto text-center align-middle flex justify-center items-center" />
                    </span>
                  </Link>
                </div>
              </div>
              <div className=" w-[486px]">
                <h3 className="font-bold text-xl border-b-4 border-b-white/20 dark:border-b-gray-800/70 w-fit mb-2">
                  {t("love")} ♥
                </h3>
                <p className="indent-[1em] hyphens-auto text-justify ">
                  {t("loveDesc")}
                </p>
              </div>
              <div className=" w-[486px] mt-4">
                <h3 className="font-bold text-xl border-b-4 border-b-white/20 dark:border-b-gray-800/70 w-fit mb-2">
                  {t("web")}
                </h3>
                <ul className=" font-bold text-[#81e6d9] dark:text-[#2c7a7b]">
                  <li>
                    <a href="https://github.com/wlr1" target="_blank">
                      <button className=" hover:bg-[#81e6d9]/20 dark:hover:bg-[#81e6d9]/50  transition-all duration-200 rounded-md p-2 max-w-40 cursor-pointer flex">
                        <span className="my-auto">
                          <FaGithub className="mr-2" />
                        </span>
                        @wlr1
                      </button>
                    </a>
                  </li>
                  <li>
                    <a href="https://x.com/wlr1_dev" target="_blank">
                      <button className=" hover:bg-[#81e6d9]/20 dark:hover:bg-[#81e6d9]/50  transition-all duration-200 rounded-md p-2 max-w-40 cursor-pointer flex">
                        <span className="my-auto">
                          <FaSquareXTwitter className="mr-2" />
                        </span>
                        @wlr1_dev
                      </button>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomeContent;
