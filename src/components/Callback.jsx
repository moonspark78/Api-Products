import React, { useState } from 'react'
import "./des.css"

export const Callback = ({sisi}) => {
    const [search, setSearch] = useState("");

    const handleChangeInput = (e) =>{
        const color = e.target.value;
        setSearch(color);
        sisi(color)
    };

  return (
    <div>
        <input 
        placeholder="Enter text here" 
        className="input-style" 
        type="text"
        value={search}
        onChange={handleChangeInput}
        />
    </div>
  )
}
