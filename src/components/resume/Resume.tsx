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
            <p>
              • I worked with a startup company (moregift) where I built her
              website from scratch, collaborated in building the organization
              dashboard from the ground up.
            </p>
            <p>
              • Translated (moregift) several email templates on figma into
              functional interfaces.
            </p>
            <p>
              • Synchronized with design and backend teams to integrate frontend
              elements and backend logics effectively.
            </p>
            <p>
              • I gained hands-on experience working with different clients' and
              personal projects such as organization dashboard, e-commerce
              website, blog website, portfolio website, Fintech website,
              integration of authentication system and RESTful APIs etc.
            </p>
            <p> • Updated IndexPro website (freelancing)</p>
          </div>
        </div>
        <div className={`content ${taps === 1 && "activeContent"}`}>
          <h4>Education</h4>
          <div className="contentEdu">
            <h5>College of technology Akwa Ibom State</h5>
            <p>
              Diploma in Computer Science (Associate Programme), Computer
              Science
            </p>
            <span>Jan 2022 {""}- Aug 2023 </span>
          </div>
          <div className="contentEdu">
            <h5>
              AkanuIbiam Federal Polytechnic Unwana, Ebonyi State ,Nigeria
            </h5>
            <p>Higher National Diploma, Accounting</p>
            <span>Feb 2017 {""}- March 2021 </span>
          </div>
          <div className="contentEdu">
            <h5>National youth Service Corps (NYSC)</h5>

            <span>Feb 2022 - feb 2023 </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
