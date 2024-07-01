import { useState } from "react";
import "./resume.scss";

const Resume = () => {
  const [taps, setTaps] = useState(0);

  const handelTapChange = (number: any) => {
    setTaps(number);
  };
  console.log(taps);
  return (
    <div className="resume">
      <h3>Resume</h3>
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
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
            molestias exercitationem inventore nemo alias error. Iure dolor
            assumenda hic sint!
          </p>
        </div>
        <div className={`content ${taps === 1 && "activeContent"}`}>
          <h4>Education</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
            laudantium?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
