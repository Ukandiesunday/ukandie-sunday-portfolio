import { FaCode } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";
import { FaFigma } from "react-icons/fa6";
import { AiOutlineApi } from "react-icons/ai";
import "./service.scss";
import Title from "../title/Title";
import { useTheme } from "../../contexts/themecontext/ThemeProvider";

const Service = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`service ${theme === "light" ? "light" : "dark"}`}
      id="service"
    >
      <div className="serviceDetailsContainer ">
        <Title title={"What I Do"} />

        <p>
          Build websites from scratch, Update and maintain existing websites,
          Optimize code for performance and faster load times, Translate design
          wire frames into functional and production-ready code, Integrate
          RESTful APIs for website capabilities, Implement authentication
          systems, Create seamless user experiences, Apply SEO best practices
          for accessibility and rankings in search engines. Test websites for
          efficiency and resilience.
        </p>
      </div>
      <div className="serviceCards">
        <div className="cardCols">
          <div className="card">
            <FaCode className="icon" />
            <h2>Web development</h2>
            <p>
              I build websites from scratch, ensuring websites are good on all
              devices and cross-browser compatible. Optimize codes and
              incorporate best practices for seamless performance. Use Git and
              GitHub for version control and collaboration. Test websites for
              efficiency.
            </p>
          </div>

          <div className="card">
            <AiOutlineApi className="icon" />
            <h2>APIs integration</h2>
            <p>
              I Integrate RESTful APIs to enhance web application functionality
              with adequate error handling, experience in NodeJs, php, etc.
              Enabling seamless data exchange between front-end and back-end
              systems. Ensure secure API communication by implementing
              authentication mechanisms, manage user session with JWT, protect
              routes and maintain user privacy.
            </p>
          </div>
        </div>
        <div className="cardCols">
          <div className="card">
            <BsGlobe className="icon" />
            <h2>SEO Optimization</h2>
            <p>
              I Optimize website content, meta tags, semantic html elements, and
              URLs to improve search engine visibility. Enhance readability and
              user engagement. Ensure best practices for site speed,
              mobile-friendliness, and secure (HTTPS) protocols. Utilize tools
              like Google Lighthouse, devtools, cypress to identify issues and
              fixes.
            </p>
          </div>

          <div className="card">
            <FaFigma className="icon" />
            <h2>Design translation</h2>
            <p>
              I Translate static design mockups/wire frames into fully
              responsive and functional web pages while maintaining a consistent
              user experience across screen sizes. Work closely with design
              teams to convert Figma designs, Sketch files into precise and
              pixel-perfect web pages. Ensuring meticulous attention to detail.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
