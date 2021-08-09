import React from "react";
import Header from "./components/Header/Header";
import Conteudo from "./components/Conteudo/Conteudo";
import Footer from "./components/Footer/Footer";
import './App.css';

export default function App() {
  return (
    <div className="container">
      <Header/>
      <Conteudo/>
      <Footer/>
    </div>
  );
}


