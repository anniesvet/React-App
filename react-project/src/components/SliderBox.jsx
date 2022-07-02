import StudyCardStyles from "../assets/styles/StudyCard.module.css";
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

export default function SliderBox(props) {
    return (
        <div className={StudyCardStyles.btn_container}>
            <button className={StudyCardStyles.btn_leftright} onClick={props.showPrev}><FaArrowLeft /></button>

            <div>{props.card}</div>

            <button className={StudyCardStyles.btn_leftright} onClick={props.showNext}><FaArrowRight /></button>
        
        </div>

    )
}

