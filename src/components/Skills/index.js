import React from 'react'
import "./index.css"

function Skills() {
    return(
        <section id="competences">
            <h2>Compétences</h2>
            <div className="competences--content">
                <div className="competences--content__card">
                    <h3>Frontend</h3>
                        <div className="competences--content__tags">
                            <div className="content--card__html">
                                <p>HTML</p>
                            </div>
                            <div className="content--card__css">
                                <p>CSS</p>
                            </div>
                            <div className="content--card__javascript">
                                <p>Javascript</p>
                            </div>
                            <div className="content--card__react">
                                <p>React</p>
                            </div>
                        </div>
                </div>
                <div className="competences--content__card">
                    <h3>Backend</h3>
                        <div className="competences--content__tags">
                            <div className="content--card__nodejs">
                                <p>NodeJS</p>
                            </div>
                            <div className="content--card__express">
                                <p>Express</p>
                            </div>
                            <div className="content--card__pg">
                                <p>PostgreSQL</p>
                            </div>
                            <div className="content--card__sql">
                                <p>SQL</p>
                            </div>
                            <div className="content--card__sequelize">
                                <p>Sequelize</p>
                            </div>
                        </div>
                </div>
                <div className="competences--content__card">
                    <h3>Gestion</h3>
                        <div className="competences--content__tags">
                            <div className="content--card__git">
                                <p>Git</p>
                            </div>
                            <div className="content--card__github">
                                <p>Github</p>
                            </div>
                            <div className="content--card__scrum">
                                <p>Scrum</p>
                            </div>
                            <div className="content--card__trello">
                                <p>Trello</p>
                            </div>
                            <div className="content--card__heroku">
                                <p>Heroku</p>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;
