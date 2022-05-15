import {React, useState} from "react";
import ReadListStyles from '../assets/styles/ReadList.module.css';
import { FaPenAlt } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';
import EditReadList from "./EditReadList";

function ReadList (props) {

    return (
        <div className={ReadListStyles.wrapper}> 
            <div className={ReadListStyles.number}>{props.id}</div>
            <div className={ReadListStyles.word}>{props.english}</div>
            <div className={ReadListStyles.word}>{props.transcription}</div>
            <div className={ReadListStyles.word}>{props.russian}</div>
            <div className={ReadListStyles.edit}>
            <button className={ReadListStyles.btn_edit}><FaPenAlt /></button>
            <button className={ReadListStyles.btn_delete}><FaTrashAlt /></button>
            </div>
        </div>
    )
}

export default ReadList
