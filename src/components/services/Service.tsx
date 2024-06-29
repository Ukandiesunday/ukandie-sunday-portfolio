import { SlCallEnd } from "react-icons/sl";
import "./service.scss";

const Service = () => {
  return (
    <div className="service">
      <div className="serviceDetailsContainer ">
        <h3>What I Do</h3>
        <p>
          I build website from scratch, update existing website, optimize code
          for seamless SEO, translate design wire frames into actual code,
          integrate Restful APIs, implement authentication system, create
          seamless UX and application SEO principles.
        </p>
      </div>
      <div className="serviceCards">
        <div className="cardCols">
          <div className="card">
            <h2>Web development</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem hic
              similique veritatis fuga iste facilis qui! Dolore provident magnam
              dolorum ratione esse sit vitae est. Ipsam blanditiis quisquam
              suscipit saepe?
            </p>
            <SlCallEnd className="icon" />
          </div>

          <div className="card">
            <h2>APIs integration</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
              debitis quibusdam laudantium assumenda, commodi fugit, alias
              labore quos perspiciatis corporis, dolor architecto molestiae
              pariatur eius placeat odit corrupti explicabo exercitationem!
            </p>
            <SlCallEnd className="icon" />
          </div>
        </div>
        <div className="cardCols">
          <div className="card">
            <h2>SEO Optimization</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Architecto numquam commodi quia quasi id, molestias sequi non
              nisi, necessitatibus amet voluptates earum, placeat reprehenderit
              voluptatum! Consectetur laboriosam quos hic sunt?
            </p>
            <SlCallEnd className="icon" />
          </div>

          <div className="card">
            <h2>Design translation</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
              exercitationem enim eveniet aperiam similique ullam! Veniam ea
              porro iusto impedit expedita harum esse officia, quisquam
              doloremque. Harum fugiat modi possimus!
            </p>
            <div className="iconContainer ">
              <SlCallEnd className="icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
