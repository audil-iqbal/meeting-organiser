import React from "react";

const TextInput = ({placeholder, handleChange, ...otherProps}) => {

    return(
        <input type='text' onChange={handleChange} placeholder={placeholder} {...otherProps}/>
    );
}

export default TextInput;