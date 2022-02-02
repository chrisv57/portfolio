import React from "react";
import "./contactme.css";
const Contactme = () => {
  return (
    <div className="portfolio__contactme" id="contact">
      <div className="portfolio__contactme-content">
        <p>
          Feel free to reach out if you're interested in working together, being
          friends, or discussing the best bubble tea spots!
        </p>
      </div>
      <div className="portfolio__contactme-btn">
        <a href="mailto:shubamverma@foxtaledesigns.com"><button type="button">GET IN TOUCH</button></a>
      </div>
    </div>
  );
};

export default Contactme;
