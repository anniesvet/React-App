import {React, useState} from "react";
import { FaPenAlt } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';
import ReadListStyles from '../assets/styles/ReadList.module.css';


function WordInfo ({word, updateWordItem}) {

    const [isEdit, setIsEdit] = useState(true);

    const [values, setValues] = useState({
        english: word.english,
        transcription: word.transcription,
        russian: word.russian,
    })

    const handeleChange = (e) => {
        setValues({
            ...values, [e.target.name] : e.target.value,
        })
        updateWordItem(values)
    }

    const handleIsEdit = () => {
        setIsEdit(!isEdit) 
    }

    console.log(values)
    return (
            <div className={ReadListStyles.wrapper}> 
                <div className={ReadListStyles.number}>{word.id}</div>
                <div className={ReadListStyles.word}> {isEdit ? values.english : <input type="text"
                value={values.english}
                onChange={handeleChange}
                name="english"
                />}
                </div>

                <div className={ReadListStyles.word}>{isEdit ? values.transcription :
                <input type="text"
                value={values.transcription}
                onChange={handeleChange}
                name="transcription"
                />}
                </div>

                <div className={ReadListStyles.word}>{isEdit ? values.russian : <input type="text"
                value={values.russian}
                onChange={handeleChange}
                name="russian"
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


