import React, {Fragment, useEffect, useRef} from "react";
import StudyCardStyles from "../assets/styles/StudyCard.module.css";
import ReadListStyles from '../assets/styles/ReadList.module.css';


function StudyCard (props) {

    const ref = useRef();
    useEffect(() => ref.current.focus(), []);
    
    return (
    <Fragment>
        <div className={StudyCardStyles.wrapper}>
            <div className={StudyCardStyles.word_info}>
                <div className={StudyCardStyles.word}>{props.english}</div>
                <div className={StudyCardStyles.transcription}>{props.transcription}</div>
            </div>

            <div className={ReadListStyles.inspect}>
                {props.button ? <button ref={ref} onMouseLeave={props.handleClick2} className={ReadListStyles.btn_edit__show}>{props.russian}</button> : <button ref={ref} onClick={props.handleClick} className={ReadListStyles.btn_edit__inspect}>Проверить</button> }
            </div>
        </div>
        <div>Выучено слов: {props.count}</div>
    </Fragment>
    
    )
}

export default StudyCard
