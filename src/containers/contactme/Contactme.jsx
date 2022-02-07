import React from "react";
import "./contactme.css";
import { AiOutlineLinkedin, AiOutlineMail, AiFillGithub } from "react-icons/ai";
const Contactme = () => {
  return (
    <div className="portfolio__contactme section__padding" id="contact">
      <div className="portfolio__contactme-content">
        <p>
          Feel free to reach out if you're interested in working together, being
          friends, or discussing the best bubble tea spots!
        </p>

        <div className="portfolio__contactme-links">
          <a href="mailto:shubamverma@foxtaledesigns.com">
            <button type="button">
              {" "}
              <AiOutlineMail className="portfolio__contactme-custom-icons" />
              Send an Email
            </button>
          </a>

          <button
            type="button"
            onClick={() =>
              window.open("https://www.linkedin.com/in/shubamverma/", "_blank")
            }
          >
            <AiOutlineLinkedin className="portfolio__contactme-custom-icons" />
            LinkedIn
          </button>

          <button
            type="button"
            onClick={() => window.open("https://github.com/chrisv57", "_blank")}
          >
            <AiFillGithub className="portfolio__contactme-custom-icons" />
            Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contactme;
