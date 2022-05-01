import React from "react";
import headerStyles from '../assets/styles/Header.module.css';


function Header () {
    return (
        <header>
            <h1 className={headerStyles.name}>Изучение иностранных слов по карточкам</h1>
        </header>
    )
}

export default Header