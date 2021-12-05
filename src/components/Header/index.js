import React, { useState } from "react"
import "./index.css"

function toggleNavbar(event) {
    const menuElm = document.querySelector(".navbar-menu");
    menuElm.classList.toggle("is-active")
    event.currentTarget.classList.toggle("is-active")
}

function closeNavbar() {
    const burgerElm = document.querySelector(".navbar-burger");
    burgerElm.classList.remove("is-active")
    const menuElm = document.querySelector(".navbar-menu");
    menuElm.classList.remove("is-active")

}

export default function Header() {
    return (
        <header id="header">
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">

                    <a onClick={toggleNavbar} role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                    <a href="#presentation" className="navbar-item" onClick={closeNavbar}>
                            Présentation
                        </a>

                        <a href="#projets" className="navbar-item" onClick={closeNavbar}>
                            Projets
                        </a>

                        <a href="#competences" className="navbar-item" onClick={closeNavbar}>
                            Compétences
                        </a>

                        <a href="#contact" className="navbar-item" onClick={closeNavbar}>
                            Contact
                        </a>
                    </div>
                </div>
            </nav>
        </header>
                    )
}