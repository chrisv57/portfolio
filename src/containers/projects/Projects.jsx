import React from "react";
import "./projects.css";
import { Work } from "../../components";
import { project01, project02, project03, project04 } from "./imports";

const Projects = () => {
  const technologies = [
    {
      imgUrl: project01,
      title: "CryptoSpace",
      description:
        "Built responsive Real-Time crypto stats WebApp. Global Stats, Top Cryptocurrencies, NFTs and News are fetched using Rapid API.",
      tech: [
        {
          tech01: "React",
          tech02: "Javascript",
        },
      ],
      links: [
        {
          github: "https://github.com/chrisv57/cryptoapp",
          live: "cryptospace.netlify.app",
        },
      ],
    },
    {
      imgUrl: project02,
      title: "Amazon Data Scrapper API ",
      description:
        "Products, reviews and offers from amazon.ca are scrapped using Express and Nodeman",
      tech: [
        {
          tech01: "React",
          tech02: "NodeJs",
          tech03: "express",
        },
      ],
      links: [
        {
          github: "https://github.com/chrisv57/Api_scrapper",
        },
      ],
    },
    {
      imgUrl: project03,
      title: "Painting Portal",
      description:
        "Online Paiting shopping website, where user can purchase, signin and save their information.",
      tech: [
        {
          tech01: "Php",
          tech02: "Javascript",
          tech03: "MySql",
        },
      ],
      links: [
        {
          github: "https://github.com/chrisv57/Painting-Portal",
        },
      ],
    },
    {
      imgUrl: project04,
      title: "Shopify Custom Page",
      description:
        "Primary responsibilities included developing custom web-page application using Shopify REST API",
      tech: [
        {
          tech01: "Shopify",
          tech02: "Javascript",
          tech03: "Ajax",
        },
      ],
      links: [
        {
          github: "https://github.com/chrisv57/Painting-Portal",
        },
      ],
    },
  ];
  return (
    <div className="portfolio__projects section__padding" id="projects">
      <div className="portfolio__projects-heading">
        <p>FEATURED PROJECTS</p>
      </div>
      <div className="portfolio__projects-container">
        <Work props={technologies} />
      </div>
    </div>
  );
};

export default Projects;
