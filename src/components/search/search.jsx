import "./search.css";
import React, { useState } from 'react';
import Delete from "../../assets/x.png";

export function Search() {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };
    const handleDeleteClick = () => {
        setInputValue('');
    };
    return (
        <div className="input-wrapper">
            <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Buscar" name="text" />
            {inputValue.length > 0 && (<img id="delete-icon" onClick={handleDeleteClick} src={Delete} alt="borrar contenido del search" />)}
        </div>
    );
}
