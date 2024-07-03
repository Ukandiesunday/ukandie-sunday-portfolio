import { FaCode } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";
import { FaFigma } from "react-icons/fa6";
import { AiOutlineApi } from "react-icons/ai";
import "./service.scss";

const Service = () => {
  return (
    <div className="service" id="service">
      <div className="serviceDetailsContainer ">
        <h3>What I Do</h3>
        <p>
          I build websites from scratch, update existing websites, optimize code
          for seamless SEO, translate design wireframes into actual code,
          integrate Restful APIs, implement authentication systems, create
          seamless UX and application SEO principles.
        </p>
      </div>
      <div className="serviceCards">
        <div className="cardCols">
          <div className="card">
            <FaCode className="icon" />
            <h2>Web development</h2>
            <p>
              I build websites from scratch, ensuring websites are
              mobile-friendly and cross-browser compatible. Optimize codes for
              seamless performance, Knowledgeable in Git and GitHub for code
              management and collaboration. .
            </p>
          </div>

          <div className="card">
            <AiOutlineApi className="icon" />
            <h2>APIs integration</h2>
            <p>
              I Integrate RESTful APIs to enhance web application functionality
              with adequate error handling, experienced in NodeJs and MongoDB,
              enabling seamless data exchange between front-end and back-end
              systems. Ensure secure API communication by implementing
              authentication mechanisms like OAuth2 and JWT, protecting
              sensitive data and maintaining user privacy.
            </p>
          </div>
        </div>
        <div className="cardCols">
          <div className="card">
            <BsGlobe className="icon" />
            <h2>SEO Optimization</h2>
            <p>
              I Optimize website content, meta tags, headers, and URLs to
              improve search engine visibility. Enhance readability and user
              engagement. Ensure best practices for site speed,
              mobile-friendliness, and secure (HTTPS) protocols. Utilize tools
              like Google Lighthouse to identify issues and fixes.
            </p>
          </div>

          <div className="card">
            <FaFigma className="icon" />
            <h2>Design translation</h2>
            <p>
              I Translate static design mockups into fully responsive and
              interactive web pages while maintaining a consistent user
              experience across various devices and screen sizes. Work closely
              with design teams to Figma, and Sketch files into precise,
              pixel-perfect web pages. Ensure that the final product accurately
              matches the original design specifications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
