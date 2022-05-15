import React from "react";
import { useState } from "react";
import DeleteEditBtnStyles from '../assets/styles/DeleteEditBtn.module.css';
import { FaPenAlt } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';



function Buttons () {

    return (
    <div className={DeleteEditBtnStyles.wrapper}>
        <button className={DeleteEditBtnStyles.btn_edit}><FaPenAlt /></button>
        {/* <button className={DeleteEditBtnStyles.btn_delete}><FaTrashAlt /></button> */}
    </div>
    )
}

export default Buttons