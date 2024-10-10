import React from "react";
import dataRealisation from "../../dataRéalisation";  // Importation des données des projets
import "./réalisation.scss";

const Realisation = () => {
  return (
    <section id="realisations" className="realisations">
      <h2>Mes Réalisations</h2>
      <div className="projects-container">
      {dataRealisation.map((project) => (
          <div key={project.id} className="project-card">
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Realisation;
