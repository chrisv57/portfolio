import React from "react";

import "./header.css";
const header = () => {
  return (
    <div className="portfolio__header section__padding" id="home">
      <div className="portfolio__header-content">
        <p> Hey, I'm </p>
        <h1 className="gradient__text">Shubam Verma</h1>
        <p>
          I'm a Web Developer based in Ottawa, Canada. I enjoy creating things
          that live on the internet, whether that be websites, applications, or
          anything in between. I have been building personal projects for a year
          now while studying at the college and I've manage to gain a decent
          amount of experience and valuable knowledge from all different kinds
          of fields throughout my projects/work.
        </p>
      </div>
    </div>
  );
};

export default header;
