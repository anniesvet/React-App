import React, {useState, useEffect} from "react";
import WordInfo from "./WordInfo";
import ReadListStyles from '../assets/styles/ReadList.module.css';

// сохранила в localStorage
let words = [
    {id:1, english:"carrot",transcription:"[ ˈkærət ]",russian:"морковь"},
    {id:2, english:"buttefly",transcription:"[ ˈbʌtəflaɪ ]",russian:"бабочка"},
    {id:3, english:"street", transcription:"[ stri:t ]", russian:"улица"},
    {id:4,english:"car",transcription:"[ kɑ: ]",russian:"автомобиль"},
    {id:5,english:"arm",transcription:"[ ɑ:m ]",russian:"рука"},
    {id:6,english:"air",transcription:"[  eər ]",russian:"воздух"},
    {id:7,english:"fox",transcription:"[ fɒks ]",russian:"лиса"},
    {id:8,english:"rabbit",transcription:"[ ˈræbɪt ]",russian:"кролик"},
    {id:9,english:"owl",transcription:"[ aʊl ]",russian:"сова"},
    {id:10,english:"mouse",transcription:"[ maʊs]",russian:"мышь"},
    {id:11,english:"mouse",transcription:"[ maʊs]",russian:"мышь"},
    {id:10,english:"mouse",transcription:"[ maʊs]",russian:"мышь"},
    {id:10,english:"mouse",transcription:"[ maʊs]",russian:"мышь"},
    {id:10,english:"mouse",transcription:"[ maʊs]",russian:"мышь"},
    {id:10,english:"mouse",transcription:"[ maʊs]",russian:"мышь"},
    {id:10,english:"mouse",transcription:"[ maʊs]",russian:"мышь"},
    {id:10,english:"mouse",transcription:"[ maʊs]",russian:"мышь"},
    {id:10,english:"mouse",transcription:"[ maʊs]",russian:"мышь"},
    {id:10,english:"mouse",transcription:"[ maʊs]",russian:"мышь"},
    {id:10,english:"mouse",transcription:"[ maʊs]",russian:"мышь"},
    {id:10,english:"mouse",transcription:"[ maʊs]",russian:"мышь"},
    {id:10,english:"mouse",transcription:"[ maʊs]",russian:"мышь"},
    {id:10,english:"mouse",transcription:"[ maʊs]",russian:"мышь"},
    {id:10,english:"mouse",transcription:"[ maʊs]",russian:"мышь"},
    {id:10,english:"mouse",transcription:"[ maʊs]",russian:"мышь"},
    {id:10,english:"mouse",transcription:"[ maʊs]",russian:"мышь"},
    {id:10,english:"mouse",transcription:"[ maʊs]",russian:"мышь"},
    {id:10,english:"mouse",transcription:"[ maʊs]",russian:"мышь"},
    {id:10,english:"mouse",transcription:"[ maʊs]",russian:"мышь"},
    {id:10,english:"mouse",transcription:"[ maʊs]",russian:"мышь"},
    {id:10,english:"mouse",transcription:"[ maʊs]",russian:"мышь"}
    ];


function Content () {

    // const [words, setWords] = useState([])

    // useEffect(() => {
    //     setWords(JSON.parse(localStorage.getItem("words")))
    // }, [])

    return (
        
        <div className={ReadListStyles.main}>
        {
        words.map((word) => (
            <WordInfo id={word.id} english={word.english} transcription={word.transcription} russian={word.russian} />
        ))}
        </div>
    )
}

export default Content
