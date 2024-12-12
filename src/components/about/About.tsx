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
          I’m a results-driven Front-End Developer with over two years of
          experience creating impactful and user-focused web solutions. <br />{" "}
          At Solacatech, I developed a high-performance and SEO-optimized
          websites that deliver exceptional results. Seamlessly integrated APIs,
          and collaborated with cross-functional team to build efficient and
          scalable products that exceeded client expectations. <br /> During my
          internship at Moregift, I focused on learning and translating of
          complex designs from Figma into functional web applications,
          collaborated with backend teams to integrate services, and delivered
          clean, responsive code. I thrive on solving challenges, driving
          innovation, and creating seamless user experiences. Outside of work, I
          enjoy designs, gaming, and mentoring aspiring developers to foster
          growth in the tech community. <br /> I’m eager to bring my expertise
          to your team and build exceptional digital solutions.
        </p>
      </div>
    </div>
  );
};

export default About;
