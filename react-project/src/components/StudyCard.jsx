import React, {useState} from "react";
import StudyCardStyles from "../assets/styles/StudyCard.module.css";
import ReadListStyles from '../assets/styles/ReadList.module.css';

function StudyCard () {
    const [button, isClickButton] = useState(true);

    const handleClick = () => {
        isClickButton(!button)
    };

    return (
        <div className={StudyCardStyles.wrapper}>
        <div className={StudyCardStyles.word_info}>
            <div className={StudyCardStyles.word}>carrot</div>
            <div className={StudyCardStyles.transcription}>[ ˈkærət ]</div>
        </div>

        <div className={ReadListStyles.inspect}>
            {button ? <button onClick={handleClick} className={ReadListStyles.btn_edit__inspect}>Проверить</button> : <button onClick={handleClick} className={ReadListStyles.btn_edit__show}>Морковь</button>}
        </div>
    </div>
    )
}

export default StudyCard