import React, {useState} from "react"
import "./index.css"
import { NavLink } from 'react-router-dom'
import Logo from "../../img/LogoPortfolio.png"

export default function Header () {
    return(
        <header id="header">
            <div className="header--boximg">
                <img className="header--boximg__img" src={Logo} alt="Logo du portfolio" />
            </div>
            <nav className="header--nav">
                <NavLink to="#projets">Projets</NavLink>
                <NavLink to="#competences">Compétences</NavLink>
                <NavLink to="#contact">Me contacter</NavLink>
            </nav>
        </header>
    )
}