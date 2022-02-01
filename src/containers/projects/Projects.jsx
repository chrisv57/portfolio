import React from "react";
import { Link } from "react-router-dom";
import "./projects.css";
import { Card } from "antd";
import { AiOutlineGithub } from "react-icons/ai";
import { project01, project02, project03, project04 } from "./imports";

const { Meta } = Card;

const Projects = () => {
  return (
    <div className="portfolio__projects section__padding" id="projects">
      <div className="portfolio__projects-heading">
        <p>FEATURED PROJECTS</p>
      </div>
      <div className="portfolio__projects-container">
        <Card
          hoverable
          style={{ width: 600 }}
          cover={
            <a href="https://cryptospace.netlify.app/">
              <img alt="example" src={project01} />
            </a>
          }
          className="portfolio__projects-custom-cards"
        >
          <Meta
            title="CryptoSpace"
            description="Built responsive Real-Time crypto stats WebApp. Global Stats, Top Cryptocurrencies, NFTs and News are fetched using Rapid API."
            className="portfolio__projects-custom-cards-meta"
            onClick={() =>  window.open("https://cryptospace.netlify.app/", "_blank")}
          />

          <AiOutlineGithub className="github__icon" />
        </Card>

        <Card
          hoverable
          style={{ width: 600 }}
          cover={
            <a href="https://github.com/chrisv57/Painting-Portal">
              <img alt="example" src={project02} />
            </a>
          }
          className="portfolio__projects-custom-cards"
        >
          <Meta
            title="Painting Portal"
            description="Full Stack Online Marketplace for selling paitings."
            className="portfolio__projects-custom-cards-meta"
            onClick={() => window.open("https://github.com/chrisv57/Painting-Portal","_blank")}
          />

          <AiOutlineGithub className="github__icon" />
        </Card>
        <Card
          hoverable
          style={{ width: 600 }}
          cover={
            <a href="https://github.com/chrisv57/Api_scrapper">
              <img alt="example" src={project03} />
            </a>
          }
          className="portfolio__projects-custom-cards"
        >
          <Meta
            title="Amazon API "
            description="•	Products, reviews and offers from amazon.ca are scrapped using Express and Nodeman. Web API is added to Rapid API for user interaction."
            className="portfolio__projects-custom-cards-meta"
            onClick={() => window.open("https://github.com/chrisv57/Api_scrapper","_blank")}
          />

          <AiOutlineGithub className="github__icon" />
        </Card>
        <Card
          hoverable
          style={{ width: 600 }}
          cover={
            <a href="https://floralenvy.ca/">
              <img alt="example" src={project04} />
            </a>
          }
          className="portfolio__projects-custom-cards"
        >
          <Meta
            title="FloralEnvy.ca"
            description="Primary responsibilities included developing custom web-page application using Shopify REST API."
            className="portfolio__projects-custom-cards-meta"
            onClick={() => window.open("https://floralenvy.ca/","_blank")}
          />

          <AiOutlineGithub className="github__icon" />
        </Card>
      </div>
    </div>
  );
};

export default Projects;
