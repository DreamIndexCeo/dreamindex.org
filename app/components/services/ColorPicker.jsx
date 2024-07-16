import React, { useState } from 'react';


function ColorPicker(id) {

    const [color, setColor] = useState("#FFFFFF");

    function handleColorChange(event){
        setColor(event.target.value)
    }

    return( 
        <div className='color-picker-container'>
            <div className='color-display' style={{backgroundColor: color}}>
                <input type="text" id={id+'color'} name={id+'color'} placeholder={color} onChange={handleColorChange}/>
            </div>

            <label>Select a Color:</label>

            <input type='color' value={color} onChange={handleColorChange}/>

        </div>
    );

}

export default ColorPicker
