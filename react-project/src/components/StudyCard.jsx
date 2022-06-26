import React, {Fragment, useState} from "react";
import StudyCardStyles from "../assets/styles/StudyCard.module.css";
import ReadListStyles from '../assets/styles/ReadList.module.css';


function StudyCard (props) {

    const [button, isClickButton] = useState(false)
    const [count, setCount] = useState(0)

    const handleClick = () => {
        isClickButton(!button)
        setCount(count + 1)
    };

    const handleClick2 = () => {
        isClickButton(!button)
    };
    
    return (
    <Fragment>
        <div className={StudyCardStyles.wrapper}>
            <div className={StudyCardStyles.word_info}>
                <div className={StudyCardStyles.word}>{props.english}</div>
                <div className={StudyCardStyles.transcription}>{props.transcription}</div>
            </div>

            <div className={ReadListStyles.inspect}>
                {button ? <button onMouseLeave={handleClick2} className={ReadListStyles.btn_edit__show}>{props.russian}</button> : <button onMouseOver={handleClick} className={ReadListStyles.btn_edit__inspect}>Проверить</button> }
            </div>
        </div>
        <div>Выучено слов: {count}</div>
    </Fragment>
    
    )
}

export default StudyCard
