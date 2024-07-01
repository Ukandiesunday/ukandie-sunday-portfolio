import "./projects.scss";
import { BiLink } from "react-icons/bi";

const Projects = () => {
  return (
    <div className="projects">
      <h3>My Projects</h3>

      <div className="cardContainer">
        <div className="projectCards">
          <div className="cardContentCols">
            <div className="imgWrapper">
              <img
                className="img"
                src="/images/ecom.png"
                alt="ecommerce photo"
              />
            </div>
            <div className="linkContainer">
              <h4>E-commerce website</h4>
              <a href="#" className="link">
                <BiLink />
              </a>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
              modi.
            </p>
          </div>
        </div>
        <div className="projectCards">
          <div className="cardContentCols">
            <div className="imgWrapper">
              <img
                className="img"
                src="/images/blog.png"
                alt="ecommerce photo"
              />
            </div>
            <div className="linkContainer">
              <h4>Blog website</h4>
              <a href="#" className="link">
                <BiLink />
              </a>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
              modi.
            </p>
          </div>
        </div>
        <div className="projectCards">
          <div className="cardContentCols">
            <div className="imgWrapper">
              <img
                className="img"
                src="/images/moregift.png"
                alt="ecommerce photo"
              />
            </div>
            <div className="linkContainer">
              <h4>Fintech Website</h4>
              <a href="#" className="link">
                <BiLink />
              </a>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
              modi.
            </p>
          </div>
        </div>
        <div className="projectCards">
          <div className="cardContentCols">
            <div className="imgWrapper">
              <img
                className="img"
                src="/images/ecom.png"
                alt="ecommerce photo"
              />
            </div>
            <div className="linkContainer">
              <h4>E-commerce website</h4>
              <a href="#" className="link">
                <BiLink />
              </a>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
              modi.
            </p>
          </div>
        </div>
        <div className="projectCards">
          <div className="cardContentCols">
            <div className="imgWrapper">
              <img
                className="img"
                src="/images/ecom.png"
                alt="ecommerce photo"
              />
            </div>
            <div className="linkContainer">
              <h4>E-commerce website</h4>
              <a href="#" className="link">
                <BiLink />
              </a>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
              modi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
