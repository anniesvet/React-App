import {React, useState} from "react";
import { FaPenAlt } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';
import ReadListStyles from '../assets/styles/ReadList.module.css';


function WordInfo (props) {

    const [isEdit, setIsEdit] = useState(true);

    const handleIsEdit = () => {
        setIsEdit(!isEdit) 
    }

    return (
            <div className={ReadListStyles.wrapper}> 
                <div className={ReadListStyles.number}>{props.id}</div>
                <div className={ReadListStyles.word}> {isEdit ? props.english : <input type="text"
                value={props.english}
                onChange={()=> {console.log(props.english)}} />}
                </div>

                <div className={ReadListStyles.word}>{isEdit ? props.transcription :
                <input type="text"
                value={props.transcription}
                onChange={()=> {console.log(props.transcription)}}/>}
                </div>

                <div className={ReadListStyles.word}>{isEdit ? props.russian : <input type="text"
                value={props.russian}
                onChange={()=> {console.log(props.russian)}}
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


