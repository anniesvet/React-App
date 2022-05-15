import React from "react";
import { useState } from "react";
import Buttons from "./DeleteEditButtons";
import EditReadList from "./EditReadList";
import ReadList from "./ReadList";

let words = [
    {id:1, english:"carrot",transcription:"[ ˈkærət ]",russian:"морковь", isEdit:true},
    {id:2, english:"buttefly",transcription:"[ ˈbʌtəflaɪ ]",russian:"бабочка", isEdit:false},
    {id:3, english:"street", transcription:"[ stri:t ]", russian:"улица", isEdit:false},
    {id:4,english:"car",transcription:"[ kɑ: ]",russian:"автомобиль", isEdit:false},
    {id:5,english:"arm",transcription:"[ ɑ:m ]",russian:"рука", isEdit:false},
    {id:6,english:"air",transcription:"[  eər ]",russian:"воздух", isEdit:false},
    {id:7,english:"fox",transcription:"[ fɒks ]",russian:"лиса", isEdit:false},
    {id:8,english:"rabbit",transcription:"[ ˈræbɪt ]",russian:"кролик", isEdit:false},
    {id:9,english:"owl",transcription:"[ aʊl ]",russian:"сова", isEdit:false},
    {id:10,english:"mouse",transcription:"[ maʊs]",russian:"мышь", isEdit:false},
    {id:11,english:"tea",transcription:"[ tiː ]",russian:"чай", isEdit:false},
    {id:12,english:"goose",transcription:"[ ɡuːs ]",russian:"гусь", isEdit:false},
    {id:13,english:"flower",transcription:"[ ˈflaʊər ]",russian:"цветок", isEdit:false},
    {id:14,english:"bird",transcription:"[ be:d ]",russian:"птица", isEdit:false},
    {id:15,english:"cat",transcription:"[ kæt ]",russian:"кот", isEdit:false}
    ];



function WordInfo () {

    const [edit, setEdit] = useState(false)

    const handleEditState = () => {
        setEdit(true)
        console.log("Я нажата")
    }

    return (
        <div>
        <button onClick={handleEditState}>Редактировать</button>
        {
        words.map((word) => (
            edit ? <EditReadList /> : <ReadList id={word.id} english={word.english} transcription={word.transcription} russian={word.russian}></ReadList> 
        ))}
        </div>
    )
}

export default WordInfo