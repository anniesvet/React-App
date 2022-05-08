import React, {useState} from "react";
import StudyCardStyles from "../assets/styles/StudyCard.module.css";
import CardButton from "../components/CardButton"
import Translate from "../components/Translate"

function StudyCard () {
    const [button, clickButton] = useState(<CardButton / >);

    const handleClick = () => {
        clickButton(<Translate />)
    };

    return (
        <div className={StudyCardStyles.wrapper}>
            <div className={StudyCardStyles.word_info}>
                <div className={StudyCardStyles.word}>carrot</div>
                <div className={StudyCardStyles.transcription}>[ ˈkærət ]</div>
            </div>
            {/* <button className={StudyCardStyles.btn} onClick={handleClick}>Проверить</button> */}

            <div onClick={handleClick}>{button}</div>
            
        </div>
    )
}

export default StudyCard