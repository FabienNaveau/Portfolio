import React, { useState } from "react"
import "./index.css"

function toggleNavbar(event) {
    const menuElm = document.querySelector(".navbar-menu");
    menuElm.classList.toggle("is-active")
    event.currentTarget.classList.toggle("is-active")
}

export default function Header() {
    return (
        <header id="header">
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">

                    <a onClick={toggleNavbar} role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-start">
                    <a href="#presentation" class="navbar-item">
                            Présentation
                        </a>

                        <a href="#projets" class="navbar-item">
                            Projets
                        </a>

                        <a href="#competences" class="navbar-item">
                            Compétences
                        </a>

                        <a href="#contact" class="navbar-item">
                            Contact
                        </a>
                    </div>
                </div>
            </nav>
        </header>
                    )
}