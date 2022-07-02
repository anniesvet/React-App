import {React, useState} from "react";
import { FaPenAlt } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';
import ReadListStyles from '../assets/styles/ReadList.module.css';


function WordInfo ({word}) {

    const [isEdit, setIsEdit] = useState(true);
    const [english, setEnglish] = useState(word.english)
    const [transcription, setTranscription] = useState(word.transcription)
    const [russian, setRussian] = useState(word.russian)
    // const [transcription, setTranscription] = useState(props.transcription)
    // const [russian, setRussian] = useState(props.russian)

    const handleIsEdit = () => {
        setIsEdit(!isEdit) 
    }

    let HandleSetEnglish = (e) => {
        setEnglish(e.target.value)
        Handle(word)
    }

    let HandleSetTranscription = (e) => {
        setTranscription(e.target.value)

    }

    let HandleSetRussian = (e) => {
        setRussian(e.target.value)
    }

    const Handle = (word) => {
        console.log(word)
    }


    return (
            <div className={ReadListStyles.wrapper}> 
                <div className={ReadListStyles.number}>{word.id}</div>
                <div className={ReadListStyles.word}> {isEdit ? english : <input type="text"
                value={english}
                onChange={HandleSetEnglish}
                />}
                </div>

                <div className={ReadListStyles.word}>{isEdit ? transcription :
                <input type="text"
                value={transcription}
                onChange={HandleSetTranscription}
                />}
                </div>

                <div className={ReadListStyles.word}>{isEdit ? russian : <input type="text"
                value={russian}
                onChange={HandleSetRussian}
                />}
                </div>
                
                <div className={ReadListStyles.edit}>
                    <button className={isEdit ? ReadListStyles.btn_edit : ReadListStyles.btn_edit__save} onClick={handleIsEdit}>{isEdit && <FaPenAlt />}{!isEdit && "Сохранить"}</button>
                    {isEdit && <button className={ReadListStyles.btn_delete}><FaTrashAlt /></button>}
                </div>
            </div>
    )
}

export default WordInfo


