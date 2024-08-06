import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import "./socialLinks.scss";
import { BsGithub, BsTwitter } from "react-icons/bs";
interface SocialLinksProp {
  header?: string;
  className?: string;
}
const SocialLinks = ({ header, className }: SocialLinksProp) => {
  return (
    <div className="socialLinks">
      <div className="socialsContainer">
        <h3>{header}</h3>
        <div className="socials">
          <a
            href="https://www.linkedin.com/in/ukandie-sunday-139612298"
            className={` socialMediaLinks ${className}`}
          >
            <FaLinkedinIn className="icon" />
          </a>
          <a
            href="https://www.facebook.com/ukandie.udo.7"
            className={` socialMediaLinks ${className}`}
          >
            <FaFacebookF className="icon" />
          </a>
          <a href="" className={` socialMediaLinks ${className}`}>
            <BsTwitter className="icon" />
          </a>
          <a
            href="https://github.com/Ukandiesunday/?tab=repositories"
            className={` socialMediaLinks ${className}`}
          >
            <BsGithub className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
