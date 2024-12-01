import React from "react";
import "../FormContact/From.scss";

const BasicForm = () => {
    return (
      <section className="Contact-container" id="contact">
        <h2>Contact</h2>
        <p>N'hésitez pas à me contacter pour plus d'informations :</p>
        <div className="Contact-frame">
          <div className="Contact-item">
            <strong>Téléphone :</strong>{" "}
            <a href="tel:+1234567890" className="Contact-link">
              +6 34 56 78 90
            </a>
          </div>
          <div className="Contact-item">
            <strong>Email :</strong>{" "}
            <a href="mailto:contact@exemple.com" className="Contact-link">
              chahinez.semmar@yahoo.com
            </a>
          </div>
        </div>
      </section>
    );
  };

export default BasicForm;