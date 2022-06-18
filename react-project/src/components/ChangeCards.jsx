import React, { useState } from 'react';
import SlideBox from './SliderBox';
import StudyCard from './StudyCard';
import StudyCardStyles from "../assets/styles/StudyCard.module.css";


let words = [
    {id:1, english:"carrot",transcription:"[ ˈkærət ]",russian:"морковь"},
    {id:2, english:"buttefly",transcription:"[ ˈbʌtəflaɪ ]",russian:"бабочка"},
    {id:3, english:"street", transcription:"[ stri:t ]", russian:"улица"},
    {id:4, english:"car",transcription:"[ kɑ: ]",russian:"автомобиль"},
    {id:5, english:"arm",transcription:"[ ɑ:m ]",russian:"рука"},
    {id:6, english:"air",transcription:"[  eər ]",russian:"воздух"},
    {id:7, english:"fox",transcription:"[ fɒks ]",russian:"лиса"},
    {id:8, english:"rabbit",transcription:"[ ˈræbɪt ]",russian:"кролик"},
    {id:9, english:"owl",transcription:"[ aʊl ]",russian:"сова"},
    {id:10, english:"mouse",transcription:"[ maʊs]",russian:"мышь"}
    ];

export default function CardSlider(props) {
    const [currentItem, setPosition] = useState(0);

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
            <SlideBox
            showPrev={showPrev}
            showNext={showNext}
            card={<StudyCard
                    id={words[currentItem].id}
                    english={words[currentItem].english}
                    transcription={words[currentItem].transcription}
                    russian={words[currentItem].russian}
                    />}>
            </SlideBox>
        )}
}