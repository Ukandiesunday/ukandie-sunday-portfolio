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
          I am a passionate and agile Frontend developer, committed to crafting
          stunning and engaging user-interfaces . <br />
          Specializes in translating static design mockups into interactive and
          responsive web pages while paying attention to detail. <br /> I have
          worked with a startup company where I learned how to set up quality
          projects, work with time, write clean, maintainable and reusable
          codes. Collaborated with design and backend teams to implement design
          features and backend logics effectively. <br /> I have efficient
          communication , problem-solving and analytical skills. Therefore, I
          will be glad to work with your awesome team and contribute my quota to
          provide a lasting and innovative digital solution to technical and
          business problems. <br /> I stay abreast of the emergence of new
          technologies with an insatiable desire for learning, improvement and
          fast adaptability to a business environment.
        </p>
      </div>
    </div>
  );
};

export default About;
