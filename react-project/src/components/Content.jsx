import React from "react";
import WordInfo from "./WordInfo";
import ReadListStyles from '../assets/styles/ReadList.module.css';


function Content ({words, updateWordItem, deleteWordItem}) {

    console.log(words)

    return (


        <div className={ReadListStyles.main}>
        {
            Array.isArray(words) &&
        words.map((word) => (
            <WordInfo key={word.id} word={word} updateWordItem={updateWordItem} deleteWordItem={deleteWordItem} />
        ))}
        </div>
    )
}

export default Content
