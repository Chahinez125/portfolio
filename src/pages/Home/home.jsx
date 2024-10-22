import React from "react";
//import "../Home/home.scss";
import Title from "../../components/Title/Title";
import Presentation from "../../components/Présentation/présentation";
import Competences from "../../components/Competances/competance";
import Cards from "../../components/Réalisations/réalisation";
//import BasicForm from "../../components/FormContact/Form";

const Home = () => {
  return (
    <div>
    <main className="home-container ">
    <Title />
    <Presentation />
    <Competences />
    <Cards />
  
    </main>
    </div>
  );
};

export default Home;