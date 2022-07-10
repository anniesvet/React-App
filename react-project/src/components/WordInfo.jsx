import {React, useState, useEffect} from "react";
import { FaPenAlt } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';
import ReadListStyles from '../assets/styles/ReadList.module.css';

function WordInfo ({word, updateWordItem, deleteWordItem}) {

    const [isEdit, setIsEdit] = useState(
        true);

    const [values, setValues] = useState({
        id: word.id,
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
        updateWordItem(values)
    }

    // console.log(values)
    return (
            <div className={ReadListStyles.wrapper}> 
                <div className={ReadListStyles.number}>{word.id}</div>
                <div className={ReadListStyles.word}> {isEdit ? values.english : <input 
                type="text"
                value={values.english}
                onChange={handeleChange}
                name="english"
                required
                />}
                </div>

                <div className={ReadListStyles.word}>{isEdit ? values.transcription :
                <input type="text"
                value={values.transcription}
                onChange={handeleChange}
                name="transcription"
                required
                />}
                </div>

                <div className={ReadListStyles.word}>{isEdit ? values.russian : <input type="text"
                value={values.russian}
                onChange={handeleChange}
                name="russian"
                required
                />}
                </div>
                
                <div className={ReadListStyles.edit}>
                    {isEdit ? <button className={ ReadListStyles.btn_edit} onClick={handleIsEdit}><FaPenAlt /></button> : <button className={ReadListStyles.btn_edit__save} disabled={!values.english || !values.transcription || !values.russian} onClick={handleIsEdit}>Сохранить</button>}
                    {isEdit && <button className={ReadListStyles.btn_delete} onClick={deleteWordItem}><FaTrashAlt /></button>}
                </div>
            </div>
    )
}

export default WordInfo


