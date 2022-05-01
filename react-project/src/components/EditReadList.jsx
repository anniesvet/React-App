import React from "react";
import ReadListStyles from '../assets/styles/ReadList.module.css';
import Buttons from './DeleteEditButtons';
import SaveButton from "./SaveButton";

function EditReadList (props) {
    return (
        <div className={ReadListStyles.wrapper}>
            <div className={ReadListStyles.number}>{props.id}</div>
            <div className={ReadListStyles.word}><input type="text"></input></div>
            <div className={ReadListStyles.word}><input type="text"></input></div>
            <div className={ReadListStyles.word}><input type="text"></input></div>
            <div className={ReadListStyles.edit}><SaveButton /><Buttons /></div>
        </div>
    )
}

export default EditReadList
