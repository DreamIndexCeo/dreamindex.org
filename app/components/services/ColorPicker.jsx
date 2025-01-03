import React, { useState } from 'react';




const ColorPicker = ({ 
    className,
    id,
    ...attrs 
  }) => {
    const [color, setColor] = useState("#FFFFFF");

    function handleColorChange(event){
        setColor(event.target.value)
    }

    return( 
        <div className='color-picker-container'>
            <div className='color-display' style={{backgroundColor: color}}>
                <input type="text" id={id} name={id} placeholder={color} onChange={handleColorChange}/>
            </div>

            <label>Select a Color:</label>

            <input type='color' name={id} value={color} onChange={handleColorChange}/>

        </div>
    );
  }

export default ColorPicker
