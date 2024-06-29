import Skills from "../skills/Skills";
import "./about.scss";

const About = () => {
  return (
    <div className="aboutContainer">
      <div className="skillsSection">
        <Skills />
      </div>
      <div className="aboutSection">
        <h3>About Me</h3>
        <p>
          I am a passionate and agile Frontend developer, committed to crafting
          visually appealing, stunning and responsive user-interfaces. <br />
          Specializes in translating design wire frames into functional
          interfaces while paying attention to detail. <br />
          I have worked with a start up company where I learned how to set up
          quality projects, work with time, write clean, maintainable and
          reuseable codes and collaborated with design and backend teams to
          implement design features and backend logics effectively.
          <br /> I have efficient communication , problem-solving and analytical
          skills, therefore I will be glad to work with your awesome team in
          order to contribute my quota in providing a lasting and innovative
          digital solutions to technical and business problems.
          <br /> I stay abreast of emergence of new technologies with insatiable
          desire for learning, improvement and fast adaptability to a business
          environment.
        </p>
        {/* More so, I gained hands on experience working with different clients and
        personal projects such as organization dashboard, e-commerce website,
        blog website, Fintech website, integration of authentication and RESTful
        APIs. */}
      </div>
    </div>
  );
};

export default About;
