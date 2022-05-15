import {React, useState} from "react";
import ReadListStyles from '../assets/styles/ReadList.module.css';
import EditReadList from "./EditReadList";
import WordInfo from "./WordInfo";

function ReadList () {

    const [edit, setEdit] = useState(<WordInfo />)

    const handleChange = () => {
        setEdit(<EditReadList></EditReadList>)
    }


    return (
        <div className={ReadListStyles.wrapper} onClick={handleChange}> 
            {edit} 
        </div>
    )
}

export default ReadList
