import React from "react";

import "./education.css";
const Education = () => {
  return (
    <div className="portfolio__education section__margin" id="education">
      <div className="portfolio__education-content">
        <p>EDUCATION</p>
        <div className="portfolio__education-program">
          <h1>Computer Engineering Technology - Advanced Diploma </h1>
          <div className="portfolio__education-date">
          <p>May 2019 - January 2022</p>
        </div>
        </div>
      
        <div className="portfolio__education-school">
          <p>Algonquin College - Ottawa, Canada</p>
        </div>
        <div className="portfolio__education-coursework">
          <p>
            Coursework: Web Programming, Java Application Programming, Web
            Enterprise Application, Software Design and Testing, .NET Enterprise
            Application Development, Operating Systems, Processor Architecture,
            Compilers.
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Education;
