import React from "react";
import StudyCard from "../components/StudyCard";


    function CardDate ({words}) {

        return (
            <div>
            {
            words.map((word) => (
                <StudyCard key={word.id} english={word.english} transcription={word.transcription} russian={word.russian} />
            ))}
            </div>
        )
    }
    
    export default CardDate
