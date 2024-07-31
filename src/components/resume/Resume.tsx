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
          <h4>Work Experience</h4>
          <div className="details">
            <div>
              <h5>Moregift company (Start-up) : Remote</h5>
              <div className="internDate">
                <h5>Front End Developer (Intern)</h5>
                <span>Jan. 2024 - June 2024</span>
              </div>
              <p>Moregift offers financial services</p>
            </div>
            <p>
              • Developed and designed web applications by writing efficient,
              modular, and maintainable code using HTML, CSS, and JavaScript
            </p>
            <p>
              • Built and maintained web applications using frontend frameworks
              like React.js and Next.js for scalability.
            </p>
            <p>
              • Documented development processes, code changes, and project
              progress to ensure clear communication within the team.
            </p>
            <p>
              • Collaborated with senior developers in building complex features
              and troubleshooting issues within the codebase.
            </p>
            <p>
              • Worked with designers and backend developers to implement new
              features and optimize existing ones.
            </p>
            <p>
              • Implemented best practices for web performance optimization,
              including SEO principles, lazy loading, and caching strategies.
            </p>
            <p>
              • Tested and debugged web applications to ensure cross-browser
              compatibility and responsiveness across various devices.
            </p>
            <p>
              • Experienced with backend technologies such as Nodejs, Python,
              MongoDB and RESTfull APIs.
            </p>
            <p>• Maintained version control using Git and GitHub.</p>
            <p>
              • Participated in daily stand-up meetings, contributing to agile
              development processes and team collaboration
            </p>
            <p>
              • Skilled in setting up and configuring webpacks, babel, Eslint
              and node package manager (npm).
            </p>
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
          <div className="contentEdu">
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
