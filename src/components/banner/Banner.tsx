import { Cursor, useTypewriter } from "react-simple-typewriter";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaSass, FaHtml5, FaCss3 } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
import "./banner.scss";
import { BsSendCheck } from "react-icons/bs";
import { DiJavascript, DiReact } from "react-icons/di";
import { BiDownload } from "react-icons/bi";
import { MdMail } from "react-icons/md";
import SocialLinks from "../socialLinks/SocialLinks";
import { useTheme } from "../../contexts/themecontext/ThemeProvider";

const Banner = () => {
  const { theme } = useTheme();
  // for typing
  const [text] = useTypewriter({
    words: ["Frontend developer.", "React developer.", "Next.js developer."],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });

  return (
    <div>
      <div className="banner" id="banner">
        <div className="bannerLeft">
          <div className="bannerLeftWrapper">
            <h3 className="welcomeMsg">Welcome to my portfolio</h3>
            <div className="MobileProfileImgContainer ">
              <img
                src="/images/ukandie1.jpg"
                alt=""
                className="MobileProfileImg"
              />
            </div>
            <div className="nameContainer">
              <h2 className="name">
                Hi, I'm <span>Ukandie Sunday</span>
              </h2>
              <h3 className="typeSkill">
                a <span className="typeWriter">{text}</span>
                <Cursor cursorStyle="|" cursorColor="#7c87a8" />
              </h3>
            </div>
            <p className="desc">
              {" "}
              I am a creative and agile frontend developer with over two(2)
              years experience building and deploying fully functional websites.
            </p>
            <div className="socialFlex">
              <div className="cvContainer">
                <h3>Check out</h3>
                <div className="cvWrapper">
                  <a
                    target="_blank"
                    href="/images/ukandieSunday.pdf"
                    download
                    className="cv"
                  >
                    MY CV {""}
                    <BiDownload />
                  </a>
                </div>
              </div>
              <SocialLinks header={"find me on"} />
              <div className="cvContainer">
                <h3>Connect</h3>
                <div className="cvWrapper sendMail">
                  <a
                    target="_blank"
                    href="mailto:ukandieudo202@gmail.com"
                    className="cv"
                  >
                    <MdMail />
                    <BsSendCheck />
                  </a>
                </div>
              </div>
            </div>

            <div className="toolsContainer">
              <h3>My technology stacks</h3>
              <div
                className={`skillsWrapper ${
                  theme === "light" ? "light" : "dark"
                }`}
              >
                <span className="skills">
                  <FaHtml5 className="icon" />
                  Html5
                </span>
                <span className="skills">
                  <FaCss3 className="icon" />
                  Css3
                </span>
                <span className="skills">
                  <DiJavascript className="icon" />
                  Js
                </span>
                <span className="skills">
                  <DiReact className="icon" />
                  React
                </span>
                <span className="skills">
                  <SiNextdotjs className="icon" />
                  Next.js
                </span>
                <span className="skills">
                  <FaSass className="icon" />
                  Sass
                </span>
                <span className="skills">
                  <SiTailwindcss className="icon" />
                  Tailwind
                </span>
                <span className="skills">
                  <SiFigma className="icon" />
                  Figma
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="bannerRight">
          <div className="profileImgContainer">
            <img src="/images/uk.png" alt="" className="profileImage" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
