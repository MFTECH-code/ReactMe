import React from "react";
import "./Conteudo.css"

export default function Conteudo() {
    return(
        <section className="content">
            <img className="perfil" src="./img/fotoPerfil.png" alt="foto de perfil" width="100"/>
            <div className="atributos">
                <p>Nome: Matheus Feitosa Silva</p>
                <p>Idade: 20 anos</p>
                <p>Linguagens: Java, JavaScript e Python</p>
                <p>Objetivo: Primeiro emprego como programador</p>
            </div>
        </section>
    );
}