import blogimg from "../../assets/images/blog.png";
import moregift from "../../assets/images/moregift-img.png";
import carShop from "../../assets/images/doncars.png";
import furniture from "../../assets/images/furn.png";
import blog from "../../assets/images/css-blog.png";
import { useTheme } from "../../contexts/themecontext/ThemeProvider";
import Title from "../title/Title";
import "./projects.scss";
import { BiLink } from "react-icons/bi";

const Projects = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`projects ${theme === "light" ? "light" : "dark"}`}
      id="projects"
    >
      <div className="title">
        <Title title={"My projects"} />
      </div>

      <div className="cardContainer">
        <div className="projectCards">
          <div className="cardContentCols">
            <div className="imgWrapper">
              <img className="img" src={carShop} alt="ecommerce photo" />
            </div>
            <div className="linkContainer">
              <h4>E-commerce website</h4>
              <a
                href="https://https://donald-car-shop-flame.vercel.app/"
                className="link"
              >
                <BiLink />
              </a>
            </div>
            <p>
              This website allows users to purchase cars,add to cart, various
              navigation views, user authentication,etc
            </p>
          </div>
        </div>

        <div className="projectCards">
          <div className="cardContentCols">
            <div className="imgWrapper">
              <img className="img" src={moregift} alt="ecommerce photo" />
            </div>
            <div className="linkContainer">
              <h4>Fintech Website</h4>
              <a href="https://moregift.app/home" className="link">
                <BiLink />
              </a>
            </div>
            <p>
              This website offers financial services, informative and educating.
              Real-time updates on financial products.
            </p>
          </div>
        </div>
        <div className="projectCards">
          <div className="cardContentCols">
            <div className="imgWrapper">
              <img className="img" src={blogimg} alt="ecommerce photo" />
            </div>
            <div className="linkContainer">
              <h4>Blog website</h4>
              <a href="https://modern-blog-umber.vercel.app" className="link">
                <BiLink />
              </a>
            </div>
            <p>
              In this website, you stay informed and entertained. Check latest
              weather and dive deeper into single posts details.
            </p>
          </div>
        </div>
        <div className="projectCards">
          <div className="cardContentCols">
            <div className="imgWrapper">
              <img className="img" src={furniture} alt="ecommerce photo" />
            </div>
            <div className="linkContainer">
              <h4>Furniture website</h4>
              <a href="https://anie-sons-furnitur.vercel.app/" className="link">
                <BiLink />
              </a>
            </div>
            <p>
              This furniture website, built with HTML, CSS, and JavaScript,
              allows users to filter furniture by category and more.
            </p>
          </div>
        </div>
        <div className="projectCards">
          <div className="cardContentCols">
            <div className="imgWrapper">
              <img className="img" src={blog} alt="css blog photo" />
            </div>
            <div className="linkContainer">
              <h4>Art & Design blog</h4>
              <a
                href="https://blog-landingpage-sage.vercel.app/"
                className="link"
              >
                <BiLink />
              </a>
            </div>
            <p>
              This landing page, built with HTML and CSS, keeps users informed
              about art and design work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
