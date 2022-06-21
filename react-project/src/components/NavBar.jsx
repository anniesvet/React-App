import React from "react";
import { Link } from "react-router-dom";
import HeaderStyle from "../assets/styles/Header.module.css";

function NavBar() {
    return(
        <nav className={HeaderStyle.navbar}>
            <Link className={HeaderStyle.img} to="/"><img src="https://i.pinimg.com/564x/da/9a/4f/da9a4f8b34beba38aebbd3342772dd9e.jpg" alt="logo"></img></Link>
            <Link className={HeaderStyle.link} to="/">Главная</Link>
            <Link className={HeaderStyle.link} to="/game">Запоминать слова</Link>
        </nav>
    )
}

export default NavBar;