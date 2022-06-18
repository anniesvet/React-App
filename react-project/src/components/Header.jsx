import React from "react";
import headerStyles from '../assets/styles/Header.module.css';
import NavBar from "./NavBar";


function Header () {
    return (
        <header className={headerStyles.fixed}>
            <NavBar />
        </header>
    )
}

export default Header