import React from 'react';

const CustomInput=props=>{
    return(
        <input 
        id={props.inputId} 
        type={props.type} 
        placeholder={props.inputPlaceholder} 
        onChange={props.handleChange}
        ref={props.ref}/>
    )
}

export default CustomInput;