import React from 'react';
import Portfolio from "../../img/portfolio.png"
import Kidozanges from "../../img/kidozanges.jpg"
import "./index.css"

const Projects = () => {

    return (
        <section id="projets">
            <h2>Mes projets</h2>
            <div className="projets--card">
                <div className="projets--card__img">
                    <img src={Kidozanges} alt="Image du projet Kidozanges" />
                </div>
                <div className="projets--card__content">
                    <h3 className="card--content__title">Kidozanges</h3>
                    <div className="card--content__tags">
                        <p className="tag--html">HTML</p>
                        <p className="tag--css">CSS</p>
                        <p className="tag--react">React</p>
                        <p className="tag--node">NodeJS</p>
                        <p className="tag--express">Express</p>
                        <p className="tag--postgresql">PostgreSQL</p>
                    </div>
                    <p className="card--content__paragraph">Kidozanges est une plateforme permettant à des parents de trouver des activités près de chez eux pour leurs enfants. Cette application participative permet également aux parents de soumettre les activités qu'ils connaissent afin d'enrichir le site. Conception de la partie back-end de l'application.</p>
                    <div className="card--content__link">
                        <a href="https://kidozanges.netlify.app" target="_blank"><i class="fas fa-link"></i> Lien vers le site</a>
                        <a href="#"><i class="fab fa-github"></i> Github back</a>
                        <a href="#"><i class="fab fa-github"></i> Github front</a>
                    </div>
                </div>
            </div>
            <div className="projets--card">
                <div className="projets--card__img">
                    <img src={Portfolio} alt="Image du projet Portfolio" />
                </div>
                <div className="projets--card__content">
                    <h3 className="card--content__title">Portfolio</h3>
                    <div className="card--content__tags">
                        <p className="tag--html">HTML</p>
                        <p className="tag--css">CSS</p>
                        <p className="tag--react">React</p>
                    </div>
                    <p className="card--content__paragraph">Conception de mon site afin de présenter mes projets et apprendre React.</p>
                    <div className="card--content__link">
                        <a href="#"><i class="fas fa-link"></i> Lien vers le site</a>
                        <a href="https://github.com/FabienNaveau/Portfolio" target="_blank"><i class="fab fa-github"></i> Github</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
