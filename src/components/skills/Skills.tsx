import "./skills.scss";

const Skills = () => {
  return (
    <div className="skillsContainer">
      <h3>my professional skills</h3>

      <div className="skillsWrapper">
        <div className="skills">
          <span className="text">
            Html5 <span>98%</span>
          </span>
          <div className="ratingBar">
            <div className="ratingBarInner firstRating"></div>
          </div>
        </div>

        <div className="skills">
          <span className="text">
            CSS3 <span>94%</span>
          </span>
          <div className="ratingBar">
            <div className="ratingBarInner secondRating"></div>
          </div>
        </div>

        <div className="skills">
          <span className="text">
            JavaScript ES6+ <span>89%</span>
          </span>
          <div className="ratingBar">
            <div className="ratingBarInner thirdRating"></div>
          </div>
        </div>
        <div className="skills">
          <span className="text">
            React <span>91%</span>
          </span>
          <div className="ratingBar">
            <div className="ratingBarInner fourthRating"></div>
          </div>
        </div>
        <div className="skills">
          <span className="text">
            Next.js <span>90%</span>
          </span>
          <div className="ratingBar">
            <div className="ratingBarInner fifthRating"></div>
          </div>
        </div>
        <div className="skills">
          <span className="text">
            TypeScript <span>85%</span>
          </span>
          <div className="ratingBar">
            <div className="ratingBarInner sixthRating"></div>
          </div>
        </div>
        <div className="skills">
          <span className="text">
            SASS <span>90%</span>
          </span>
          <div className="ratingBar">
            <div className="ratingBarInner seventhRating"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
