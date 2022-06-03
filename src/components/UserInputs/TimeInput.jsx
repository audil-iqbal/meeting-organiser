import React from "react";

const TimeInput = ({ handleChange, ...otherProps}) => {

    return(
        <input type='time' onChange={handleChange} {...otherProps}/>
    );
}

export default TimeInput;