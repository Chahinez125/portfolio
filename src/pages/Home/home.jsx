import React from "react";
//import "../Home/home.scss";
import Title from "../../components/Title/Title";
import Presentation from "../../components/Présentation/présentation";
//import Competences from "../../components/Skills/Skills";
//import Cards from "../../components/Réalisations/Réalisations";
//import BasicForm from "../../components/FormContact/Form";

const Home = () => {
  return (
    <div>Home Page
    <main className="home-container ">
    <Title />
    <Presentation />
  
    </main>
    </div>
  );
};

export default Home;