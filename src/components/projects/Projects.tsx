import blogimg from "../../assets/images/blog.png";
import moregift from "../../assets/images/moregift-img.png";
import carShop from "../../assets/images/newcar.png";
import quickseller from "../../assets/images/quick.png";
import sola from "../../assets/images/solactec.png";
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
              <img className="img" src={sola} alt="css blog photo" />
            </div>
            <div className="linkContainer">
              <h4>Company Marketing website</h4>
              <a href="https://solacatech.com/" className="link">
                <BiLink />
              </a>
            </div>
            <p>
              This multiple pages website showcases the services offer by
              SOLACATECH Company, e.g Web development, Mobile development, UX/UI
              design, IT consulting, Database Management, among others. <br />
              Responsive, SEO-optimized and cross-browser compatible.
            </p>
          </div>
        </div>
        <div className="projectCards">
          <div className="cardContentCols">
            <div className="imgWrapper">
              <img className="img" src={carShop} alt="ecommerce photo" />
            </div>
            <div className="linkContainer">
              <h4>E-commerce website</h4>
              <a
                href="https://donald-car-shop-flame.vercel.app/"
                className="link"
              >
                <BiLink />
              </a>
            </div>
            <p>
              This website allows users to purchase cars,add to cart, navigate
              different views and user authentication system,etc
            </p>
          </div>
        </div>

        <div className="projectCards">
          <div className="cardContentCols">
            <div className="imgWrapper">
              <img className="img" src={quickseller} alt="ecommerce photo" />
            </div>
            <div className="linkContainer">
              <h4>Quick Seller Admin Dashboard</h4>
              <a href="quick-seller-a.web.app" className="link">
                <BiLink />
              </a>
            </div>
            <p>
              This admin dashboard manages these activities in the website such
              as Vendors sales partnership, affiliates, dispatch riders, users
              management and tracking of activity flows, etc.
            </p>
          </div>
        </div>
        <div className="projectCards">
          <div className="cardContentCols">
            <div className="imgWrapper">
              <img className="img" src={moregift} alt="ecommerce photo" />
            </div>
            <div className="linkContainer">
              <h4>Financial portal Website.</h4>
              <a href="https://moregift.vercel.app/home" className="link">
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
              <a href="https://u-blog-gist.vercel.app/" className="link">
                <BiLink />
              </a>
            </div>
            <p>
              In this website, you stay informed and entertained. Check latest
              weather and dive deeper into single posts details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
