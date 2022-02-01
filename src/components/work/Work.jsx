import React from "react";
import "./work.css";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
const Work = ({ props }) => {
  return (
    <>
      {props.map((item) => (
        <div className="portfolio__projects-container_work">
          <div className="portfolio__projects-container_work-image">
            <img src={item.imgUrl} alt="work" />
          </div>
          <div className="portfolio__projects-container_work-content">
            {item?.links.map((value) => (
              <div className="portfolio__projects-container_work-content-info">
                <h3>{item.title}</h3>
                <a href={value?.github}>
                  <AiFillGithub className="my-custom-icon" />
                </a>
                <a href={value?.live}>
                  <AiOutlineLink className="my-custom-icon" />
                </a>
              </div>
            ))}

            <div className="portfolio__projects-container_work-content-info-description">
              <p>{item.description}</p>
            </div>
            {item?.tech?.map((value) => (
              <div className="portfolio__projects-container_work-content-info-technologies">
                <p>{value?.tech01}</p>
                <p>{value?.tech02}</p>
                <p>{value?.tech03}</p>
                <p>{value?.tech04}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Work;
