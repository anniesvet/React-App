import React, { useState } from 'react';
import SliderBox from './SliderBox';
import StudyCard from './StudyCard';
import StudyCardStyles from "../assets/styles/StudyCard.module.css";


export default function CardSlider({words}) {
    const [currentItem, setPosition] = useState(0)

    const showNext = () => {
        setPosition(currentItem + 1);
    }

    const showPrev = () => {
        if (currentItem > 0)
        setPosition(currentItem - 1);
    }

    if (currentItem >= words.length) {
        return (
            <div className={StudyCardStyles.wrapper}>
                <div className={StudyCardStyles.end}>Вы выучили все слова!</div>
            </div>
        )
    } else {
        return (
            <SliderBox 
            showPrev={showPrev}
            showNext={showNext}
            card={<StudyCard
                    id={words[currentItem].id}
                    english={words[currentItem].english}
                    transcription={words[currentItem].transcription}
                    russian={words[currentItem].russian}
                    />}> 
            </SliderBox>
        )}
}