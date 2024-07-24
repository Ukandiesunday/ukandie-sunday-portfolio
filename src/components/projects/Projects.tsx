import blogimg from "../../assets/images/blog.png";
import moregift from "../../assets/images/moregift.png";
import carShop from "../../assets/images/ecom.png";
import furniture from "../../assets/images/furn.png";
import shop from "../../assets/images/ecom2.png";

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
              <a href="https://car-shop-flame.vercel.app/" className="link">
                <BiLink />
              </a>
            </div>
            <p>
              In this website you can sort and filter cars, check different cars
              views, add to cart, view dynamic related cars and buy,etc.
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
              In this website, blog posts are fetched from the API, search
              blogs, read dynamic related posts, check weather,etc.
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
              <a href="https://ukandie-furniture.vercel.app/" className="link">
                <BiLink />
              </a>
            </div>
            <p>
              This is a furniture website built with pure html, css and
              JavaScript, here you can filter furniture by category.
            </p>
          </div>
        </div>
        <div className="projectCards">
          <div className="cardContentCols">
            <div className="imgWrapper">
              <img className="img" src={shop} alt="ecommerce photo" />
            </div>
            <div className="linkContainer">
              <h4>E-commerce website</h4>
              <a href="https://ukandie-shop.vercel.app/" className="link">
                <BiLink />
              </a>
            </div>
            <p>
              An e-commerce website built with pure html, css and JavaScript.
              Here you can add to cart, and view single product.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
