import React from "react";
import { Link } from "react-router-dom";
import StudyCardStyles from "../assets/styles/StudyCard.module.css";

function Error () {
    return (
        <div className={StudyCardStyles.wrapper}>Ошибка 404! Такой страницы не существует. Советуем посетить <Link to='/'>главную страницу</Link></div>
    )
}

export default Error