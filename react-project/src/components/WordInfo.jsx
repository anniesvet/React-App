import {React, useState} from "react";
import { FaPenAlt, FaPeopleArrows } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';
import ReadListStyles from '../assets/styles/ReadList.module.css';


function WordInfo (props) {

    const [isEdit, setIsEdit] = useState(true);
    const [english, setEnglish] = useState(props.english)
    // const [transcription, setTranscription] = useState(props.transcription)
    // const [russian, setRussian] = useState(props.russian)

    const handleIsEdit = () => {
        setIsEdit(!isEdit) 
    }

    const HandleSetEnglish = (e) => {
        setEnglish(e.target.value)
        console.log(english)
    }

    return (
            <div className={ReadListStyles.wrapper}> 
                <div className={ReadListStyles.number}>{props.id}</div>
                <div className={ReadListStyles.word}> {isEdit ? props.english : <input type="text"
                value={english}
                onChange={HandleSetEnglish} />}
                </div>

                <div className={ReadListStyles.word}>{isEdit ? props.transcription :
                <input type="text"
                />}
                </div>

                <div className={ReadListStyles.word}>{isEdit ? props.russian : <input type="text"
                />}
                </div>
                
                <div className={ReadListStyles.edit}>
                    <button className={isEdit ? ReadListStyles.btn_edit : ReadListStyles.btn_edit__save} onClick={handleIsEdit}>{isEdit && <FaPenAlt />}{!isEdit && "Сохранить"}</button>
                    {isEdit && <button onClick={props.updateWords} className={ReadListStyles.btn_delete}><FaTrashAlt /></button>}
                </div>
            </div>
    )
}

export default WordInfo


