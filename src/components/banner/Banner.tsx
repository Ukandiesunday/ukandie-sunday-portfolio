import { Cursor, useTypewriter } from "react-simple-typewriter";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import profileImg from "../../assets/images/ukedited3.png";
import profileImgMobile from "../../assets/images/ukedited3.png";
import { FaGithub } from "react-icons/fa";

import { FaSass, FaHtml5, FaCss3, FaJira } from "react-icons/fa";
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
    words: [
      "Frontend developer.",
      "Email developer.",
      "React developer.",
      "Next.js developer.",
    ],
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
              <img src={profileImgMobile} alt="" className="MobileProfileImg" />
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
              I am a passionate Front End Developer with over two years of
              experience building resilient web applications. My expertise lies
              in creating responsive and user-friendly websites.
            </p>
            <div className="socialFlex">
              <div className="cvContainer">
                <h3>Download</h3>
                <div className="cvWrapper">
                  <a
                    target="_blank"
                    href="/images/ukandie-sunday.cvE.pdf"
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
                <h3>Hire me</h3>
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
              <h3>My skills and tools</h3>
              <div
                className={`skillsWrapper ${
                  theme === "light" ? "light" : "dark"
                }`}
              >
                <div className="skills">
                  <FaHtml5 className="icon" />
                  Html5
                </div>
                <div className="skills">
                  <FaCss3 className="icon" />
                  Css3
                </div>
                <div className="skills">
                  <DiJavascript className="icon" />
                  Js
                </div>
                <div className="skills">
                  <DiReact className="icon" />
                  React
                </div>
                <div className="skills">
                  <SiNextdotjs className="icon" />
                  Next.js
                </div>
                <div className="skills">
                  <FaSass className="icon" />
                  Sass
                </div>
                <div className="skills">
                  <SiTailwindcss className="icon" />
                  Tailwind
                </div>
                <div className="skills">
                  <FaJira className="icon" />
                  Jira
                </div>
                <div className="skills">
                  <SiFigma className="icon" />
                  Figma
                </div>
                <div className="skills">
                  <FaGithub className="icon" />
                  <span style={{ textAlign: "center" }}>Git & GitHub</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bannerRight">
          <div className="profileImgContainer">
            <img
              src={profileImg}
              alt="profile image"
              loading="lazy"
              className="profileImage"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
