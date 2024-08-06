import Skills from "../skills/Skills";
import Title from "../title/Title";
import "./about.scss";

const About = () => {
  return (
    <div className="aboutContainer" id="about">
      <div className="skillsSection">
        <Skills />
      </div>
      <div className="aboutSection">
        <div className="title">
          <Title title={"About Me"} />
        </div>
        <p>
          I am a passionate Front End Developer with a knack for crafting
          stunning and engaging user interfaces. With over two years of
          experience, I excel at translating design mockups into interactive,
          responsive web pages with meticulous attention to detail. During my
          internship at Moregift, I honed my skills in project setup, time
          management, writing clean and maintainable code. I thrive in
          collaborative settings, effectively partnering with design and backend
          teams to implement features and solve complex challenges. With strong
          communication, problem-solving, and analytical abilities, I am eager
          to contribute my expertise to your team and drive innovative digital
          solutions. I am committed to continuous learning and quickly adapt to
          new technologies and dynamic environments.
        </p>
      </div>
    </div>
  );
};

export default About;
