import React from 'react'
import ContactImg from "../../img/contact.jpg"
import "./index.css"


function Contact() {
    return (
        <section id="contact">
            <h2>Contact</h2>
            <div className="contact--content">
                <div className="contact--description">
                    <p className="paragraph-description">Me contacter :</p>
                    <p><i className="icon far fa-envelope"></i><a className="contact--mail" href="mailto:fabiennaveau.dev@gmailcom">M'envoyer un mail</a></p>
                    <p><i className="icon fas fa-map-marker-alt"></i>3, lieu-dit les pacages 17150 SEMOUSSAC</p>
                    <p><i className="icon fas fa-mobile-alt"></i>06 59 55 00 12</p>
                    <p className="paragraph-description">Me suivre sur les réseaux :</p>
                    <div className="social-networks">
                        <a href="https://www.linkedin.com/in/fabien-naveau" target="_blank"><i className="icon fab fa-linkedin-in"></i></a>
                        <a href="https://github.com/FabienNaveau" target="_blank"><i className="icon fab fa-github"></i></a>
                    </div>
                </div>
                <div className="contact--imgbox">
                    <img src={ContactImg} alt="Illustration de la page contact" />
                </div>
            </div>
        </section>
    )
}

export default Contact;