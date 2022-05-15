import {React} from "react";
import ReadListStyles from '../assets/styles/ReadList.module.css';
import Buttons from './DeleteEditButtons';

function ReadList (props) {

    return (
        <div className={ReadListStyles.wrapper}>
            <div className={ReadListStyles.number}>{props.id}</div>
            <div className={ReadListStyles.word}>{props.english}</div>
            <div className={ReadListStyles.word}>{props.transcription}</div>
            <div className={ReadListStyles.word}>{props.russian}</div>
            <div className={ReadListStyles.edit}><Buttons /></div>
        </div>
    )
}

export default ReadList
