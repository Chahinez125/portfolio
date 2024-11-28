import React from "react";
//import "../Home/home.scss";
import Title from "../../components/Title/Title";
import Presentation from "../../components/Présentation/présentation";
import Competences from "../../components/Competances/competance";
import Cards from "../../components/Réalisations/réalisation";
import BasicForm from "../../components/FormContact/From";

const Home = () => {
  return (
    <div>
    <main className="home-container ">
    <Title />
    <Presentation />
    <Competences />
    <Cards />
    <BasicForm />
  
    </main>
    </div>
  );
};

export default Home;