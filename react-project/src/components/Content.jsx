import React from "react";
import WordInfo from "./WordInfo";
import ReadListStyles from '../assets/styles/ReadList.module.css';


function Content (props) {

    return (
        
        <div className={ReadListStyles.main}>
        {
        props.words.map((word) => (
            <WordInfo key={word.id} word={word} />
        ))}
        </div>
    )
}

export default Content
