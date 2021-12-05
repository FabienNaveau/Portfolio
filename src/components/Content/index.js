import React, { useState } from "react";
import "./index.css"
import CV from "../../img/CV.pdf"
import ArrowDown from "../../img/arrow-down.png"

export default function Content() {
    const firstParagraph = "Bonjour, je suis Fabien Naveau, 30 ans développeur fullstack Javascript. Fraîchement sorti de formation, je suis à la recherche d'un Contrat à Durée Indeterminée afin de parfaire mes connaissances et monter en compétences.";
    const secondParagraph = "Durant cette formation j'ai pu, pendant les 3 premiers mois, acquerir des connaissances en HTML, CSS, JavaScript, NodeJS, PostgreSQL. Ensuite j'ai poursuivi pendant 1 mois avec la spécialisation Data/API, où nous voyons des notions plus poussées en NodeJS/Express, SQL,mais également des outils de versionning de BDD comme Sqitch et des initiations à graphQL, MongoDB, PGAdmin, Redis. J'ai enfin terminé par 1 mois de projet en totale autonomie en compagnie de 5 élèves de la promo. J'ai pu alors parfaire mes connaissances mais également découvrir la gestion de projet de A à Z et travailler en méthode agile (daily scrum, backlogs, userstories, sprints, Trello)."

    return (
        <section id="presentation">
            <h2>Présentation</h2>
            <div className="pres--content">
                <div className="pres--imgbox">
                    
                </div>
                <div className="pres--para">
                    <p>{firstParagraph}</p><br/>
                    <p>{secondParagraph}</p>
                </div>
            </div>
            <div className="pres--cv">
                <a href={CV} target="_blank"><i className="icon-download fas fa-download"></i>Télécharger mon CV</a>
            </div>
            <div className="arrow-down">
                <img src={ArrowDown} />
            </div>
        </section>
    )
}