import { useState } from "react";
import "./resume.scss";
import Title from "../title/Title";

const Resume = () => {
  const [taps, setTaps] = useState(0);

  const handelTapChange = (number: any) => {
    setTaps(number);
  };

  return (
    <div className="resume" id="resume">
      <div className="title">
        <Title title={"My resume"} />
      </div>
      <div className="resumeTapsContainer ">
        <div
          onClick={() => handelTapChange(0)}
          className={`taps ${taps === 0 && "activeTap"}`}
        >
          Experience
        </div>
        <div
          onClick={() => handelTapChange(1)}
          className={`taps ${taps === 1 && "activeTap"}`}
        >
          Education
        </div>
      </div>
      <div className="resumeBottom">
        <div className={`content ${taps === 0 && "activeContent"}`}>
          <h4 className="work-experience-h4">Work Experience</h4>
          <div className="details-wrapper">
            <ul className="details">
              <li>
                <h5>MOREGIFT COMPANY | Canada (Start-up) : Remote</h5>
                <div className="internDate">
                  <h5>Front End Developer (Intern)</h5>
                  <span>Jan. 2024 - June 2024</span>
                </div>
                <p>Moregift offers financial services</p>
              </li>
              <li>
                • Developed responsive and user-friendly web applications using
                HTML, CSS, JavaScript, React.js, Next.js, etc.
              </li>
              <li>
                • Translated designs on figma to clean, maintainable and
                functional code.
              </li>
              <li>• Documented development processes and project progress.</li>
              <li>
                • Assisted in building complex features and troubleshooting
                issues in the code base giving constructive feed backs.
              </li>
              <li>
                • Collaborated seamlessly with design and backend teams to
                integrate frontend features.
              </li>
              <li>
                • Implemented best practices for web performance optimization,
                including SEO principles, lazy loading, and caching strategies.
              </li>

              <li>
                • Experienced with backend technologies such as Nodejs, and
                RESTfull APIs.
              </li>
              <li>• Maintained version control using Git and GitHub.</li>
              <li>
                • Participated in daily stand-up meetings, contributing to agile
                development processes and team collaboration
              </li>
              <li>
                • Built numerous email templates and marketing campaign
                contents.
              </li>
            </ul>
            <div className="details">
              <div>
                <h5>SOLACATECH | Nigeria (Freelancing Company) : Remote</h5>
                <div className="internDate">
                  <h5>Junior Front End Developer | CONTRACT</h5>
                  <span>June 2024 - present</span>
                </div>
                <p>SOLACATECH is a tech freelancing Company</p>
              </div>
              <ul className="details">
                <li>
                  {" "}
                  • Delivered high-performance, SEO-optimized websites tailored
                  to client requirements. Converted email templates and SEO
                  marketing contents.
                </li>
                <li>
                  • Tested and debugged websites for efficiency and
                  cross-browser compatibility.
                </li>
                <li>
                  • Integrated backend technologies such as Node.js and PHP.
                </li>
                <li>
                  • Translated Figma wire frames into production-ready code with
                  responsive user interfaces.
                </li>
                <li>• Maintained version control using Git and GitHub.</li>
                <li>
                  • Participated in code reviews, weekends stand-ups, and agile
                  development processes.
                </li>
                <li>
                  • Set up project environments and configured tools like
                  Webpack, Babel, and ESLint.
                </li>
                <li>• Kept up-to-date with frontend technology trends.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={`content ${taps === 1 && "activeContent"}`}>
          <h4>Education</h4>
          <div className="contentEdu">
            <h5>
              Akwa Ibom College of Science and Technology, Nnung Ukim Ikono,
              Nigeria.
            </h5>
            <p>Diploma computer science (Associate).</p>
            <span> 2022 {""}- 2023 </span>
          </div>
          <div className="contentEdu " style={{ marginTop: "30px" }}>
            <h5>
              Federal University of Ndufu Alike(AE-FUNAI), Ebonyi State,
              Nigeria.
            </h5>
            <p>Bachelor's Degree in Accounting.,</p>
            <span>Feb 2017 {""}- March 2021 </span>
          </div>
          {/* <div className="contentEdu">
            <h5>National youth Service Corps (NYSC)</h5>

            <span>Feb 2022 - feb 2023 </span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Resume;
