import React, {Fragment, useState} from "react";
import StudyCardStyles from "../assets/styles/StudyCard.module.css";
import ReadListStyles from '../assets/styles/ReadList.module.css';


function StudyCard (props) {
    const [button, isClickButton] = useState(true)
    // const [firstCard, setPosition] = useState


    const handleClick = () => {
        isClickButton(!button)
        console.log(props.words)
    };
    

    return (
    <Fragment>
        <div className={StudyCardStyles.wrapper}>
            <div className={StudyCardStyles.word_info}>
                <div className={StudyCardStyles.word}>{props.english}</div>
                <div className={StudyCardStyles.transcription}>{props.transcription}</div>
            </div>

            <div className={ReadListStyles.inspect}>
                {button ? <button onClick={handleClick} className={ReadListStyles.btn_edit__inspect}>Проверить</button> : <button onClick={handleClick} className={ReadListStyles.btn_edit__show}>{props.russian}</button>}
            </div>
        </div>
    </Fragment>
    
    )
}

export default StudyCard