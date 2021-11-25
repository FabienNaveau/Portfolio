import React, { useState } from "react";

import PhotoProfil from "../../img/PhotoProfil.jpg"
import "./index.css"

export default function Content() {
    const firstParagraph = "Bonjour, je suis Fabien Naveau, 30 ans développeur fullstack Javascript. Fraîchement sorti de formation, je suis à la recherche d'un Contrat à Durée Indeterminée afin de parfaire mes connaissances et monter en compétences.";
    const secondParagraph = "Durant cette formation j'ai pu, pendant les 3 premiers mois, acquerir des connaissances en HTML, CSS, JavaScript, NodeJS, PostgreSQL. Ensuite j'ai poursuivi pendant 1 mois avec la spécialisation Data/API, où nous voyons des notions plus poussées en NodeJS/Express, SQL,mais également des outils de versionning de BDD comme Sqitch et des initiations à graphQL, MongoDB, PGAdmin, Redis. J'ai enfin terminé par 1 mois de projet en totale autonomie en compagnie de 5 élèves de la promo. J'ai pu alors parfaire mes connaissances mais également découvrir la gestion de projet de A à Z et travailler en méthode agile (daily scrum, backlogs, userstories, sprints, Trello)."
    
    return (
        <section id="content">
            <div className="content--imgbox">
                <img className="content--imgbox__img" src={PhotoProfil} />
            </div>
            <div className="content--p">
                <p className="content--paragraph">{firstParagraph}</p><br />
                <p className="content--paragraph">{secondParagraph}</p>
            </div>
            <div>
            <span className="icon-text has-text-info">
                <span className="icon">
                    <i className="fas fa-info-circle"></i>
                </span>
                <span>Info</span>
            </span>
            </div>
        </section>

    )
}