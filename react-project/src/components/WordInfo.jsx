import {React, useState} from "react";
import { FaPenAlt } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';
import ReadListStyles from '../assets/styles/ReadList.module.css';
import SaveButton from '../components/SaveButton'
import saveButtonStyles from '../assets/styles/SaveButton.module.css';



function WordInfo (props) {

    const [isEdit, setIsEdit] = useState(true);

    const handleIsEdit = () => {
        setIsEdit(!isEdit) 
    }

    return (
        isEdit ?
        (<div className={ReadListStyles.wrapper}> 
            <div className={ReadListStyles.number}>{props.id}</div>
            <div className={ReadListStyles.word}>{props.english}</div>
            <div className={ReadListStyles.word}>{props.transcription}</div>
            <div className={ReadListStyles.word}>{props.russian}</div>
            <div className={ReadListStyles.edit}>
                <button className={ReadListStyles.btn_edit} onClick={handleIsEdit}><FaPenAlt /></button>
                <button className={ReadListStyles.btn_delete}><FaTrashAlt /></button>
            </div>
        </div>) :
        
        <div className={ReadListStyles.wrapper}>
            <div className={ReadListStyles.number}>{props.id}</div>
            <div className={ReadListStyles.word}><input type="text"></input></div>
            <div className={ReadListStyles.word}><input type="text"></input></div>
            <div className={ReadListStyles.word}><input type="text"></input></div>
            <div className={ReadListStyles.edit}>
                <button className={ReadListStyles.btn_edit__save} onClick={handleIsEdit}>Сохранить</button>
                <button className={ReadListStyles.btn_delete}><FaTrashAlt /></button>
            </div>
        </div>
    )
}

export default WordInfo