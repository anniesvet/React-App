import React from "react";
import EditReadList from "./EditReadList";
import ReadList from "./ReadList";

let words = [
    {id:1, english:"carrot",transcription:"[ ˈkærət ]",russian:"морковь", isEdit:true},
    {id:2, english:"buttefly",transcription:"[ ˈbʌtəflaɪ ]",russian:"бабочка"},{id:3, english:"street", transcription:"[ stri:t ]", russian:"улица"},
    {id:4,english:"car",transcription:"[ kɑ: ]",russian:"автомобиль"},
    {id:5,english:"arm",transcription:"[ ɑ:m ]",russian:"рука"},
    {id:6,english:"air",transcription:"[  eər ]",russian:"воздух"},
    {id:7,english:"fox",transcription:"[ fɒks ]",russian:"лиса"},
    {id:8,english:"rabbit",transcription:"[ ˈræbɪt ]",russian:"кролик"},
    {id:9,english:"owl",transcription:"[ aʊl ]",russian:"сова"},
    {id:10,english:"mouse",transcription:"[ maʊs]",russian:"мышь"},
    {id:11,english:"tea",transcription:"[ tiː ]",russian:"чай"},
    {id:12,english:"goose",transcription:"[ ɡuːs ]",russian:"гусь"},
    {id:13,english:"flower",transcription:"[ ˈflaʊər ]",russian:"цветок"},
    {id:14,english:"bird",transcription:"[ be:d ]",russian:"птица"},
    {id:15,english:"cat",transcription:"[ kæt ]",russian:"кот"}
    ];


function WordInfo () {
    return (
        <div>
        {
        words.map((word) =>
        <ReadList id={word.id} english={word.english} transcription={word.transcription} russian={word.russian} isEdit={word.isEdit}></ReadList>
        ) 
        }
        {
        words.map((word) =>
        <EditReadList isEdit={word.isEdit}></EditReadList>
        ) 
        }
        </div>
    )
}

export default WordInfo