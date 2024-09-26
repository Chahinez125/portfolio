import React from "react";
import "../Présentation/présentation.scss";
import ProfilePicture from "../../assets/images/Picture.chahinez.png";
const Presentation = () => {
  return (
    <section className="presentation" id="presentation">
      <div className="presentation-content">
        <img
          src={ProfilePicture}
          alt="Chahinez"
          className="profile-picture"
          loading="lazy"
        />
        <div className="text-content animate-slide-in">
          <h2>À propos de moi</h2>
          <p>
          Grâce à ma formation en Développement Web, je conçois des sites modernes et ergonomiques, adaptés aux besoins de chaque client. Passionné par l'innovation, je mets un point d'honneur à rendre la technologie intuitive et accessible à tous. Parcourez mon portfolio pour découvrir mes projets et la qualité de mon travail.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Presentation;
