import React from "react";
import { dataRealisation } from "../../dataRealisation"; 
import "./réalisation.scss";

const Realisation = () => {
  return (
    <section id="realisations" className="realisations">
      <h2>Mes Réalisations</h2>
      <div className="projects-container">
        {dataRealisation.map((project) => (
          <div key={project.id} className="project-card">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="overlay">
                  <div className="overlay-content">
                    <p>{project.description}</p>
                    <p><strong>Problématique:</strong> {project.problematic}</p>
                    {/* Ajout de la réalisation */}
                    <p><strong>Réalisation:</strong> {project.Realisation}</p>
                  </div>
                </div>
              </div>
            </a>
            <div className="project-content">
              <h3>{project.name}</h3>
              <div className="technology-buttons">
                {project.category.split(', ').map((tech, index) => (
                  <button key={index} className="tech-button">{tech}</button>
                ))}
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-button">
                  Code GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Realisation;
