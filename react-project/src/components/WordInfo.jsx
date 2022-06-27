import {React, useState} from "react";
import { FaPenAlt, FaPeopleArrows } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';
import ReadListStyles from '../assets/styles/ReadList.module.css';


function WordInfo ({word}) {

    const [isEdit, setIsEdit] = useState(true);
    const [english, setEnglish] = useState(word.english)
    // const [transcription, setTranscription] = useState(props.transcription)
    // const [russian, setRussian] = useState(props.russian)

    const handleIsEdit = () => {
        setIsEdit(!isEdit) 
    }

    let HandleSetEnglish = (e) => {
        setEnglish(e.target.value)
        console.log(english)
    }

    return (
            <div className={ReadListStyles.wrapper}> 
                <div className={ReadListStyles.number}>{word.id}</div>
                <div className={ReadListStyles.word}> {isEdit ? word.english : <input type="text"
                value={english}
                onChange={HandleSetEnglish}
                />}
                </div>

                <div className={ReadListStyles.word}>{isEdit ? word.transcription :
                <input type="text"
                />}
                </div>

                <div className={ReadListStyles.word}>{isEdit ? word.russian : <input type="text"
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


