import React from "react";
import { Link } from "react-router-dom";
import HeaderStyle from "../assets/styles/Header.module.css";

function NavBar() {
    return(
        <nav className={HeaderStyle.navbar}>
            <Link className={HeaderStyle.img} to="/"><img src="https://cdn-icons.flaticon.com/png/512/5486/premium/5486259.png?token=exp=1655555875~hmac=3f5944746ba6e7d2caec9541d773b344" alt="logo"></img></Link>
            <Link className={HeaderStyle.link} to="/">Главная</Link>
            <Link className={HeaderStyle.link} to="/game">Запоминать слова</Link>
        </nav>
    )
}

export default NavBar;