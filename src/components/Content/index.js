import React, { useState } from "react";
import PhotoProfil from "../../img/PhotoProfil.jpg"

export default function Content() {
    const description = "Bonjour, je suis Fabien Naveau, 30 ans développeur fullstack Javascript. Fraîchement sorti de formation, je suis à la recherche d'un Contrat à Durée Indeterminée afin de parfaire mes connaissances et monter en compétences.";
    let x = 0;
    let result = "";
    const descriptionSplit = description.split("");
    const descriptionInterval = () => {
        setInterval(() => {
            if (x < descriptionSplit.length) {
                const paragraph = document.querySelector(".content--paragraph")
                result += descriptionSplit[x]
                paragraph.textContent = result;
                x++;
            } else return
        }, 30)
    }

    descriptionInterval()
    return (
        <main id="main">
            <img className="content--img" src={PhotoProfil} />
            <p className="content--paragraph"></p>
        </main>

    )
}