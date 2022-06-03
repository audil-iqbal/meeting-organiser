import React from "react";

const DateInput = ({handleChange, ...otherProps}) => {

    return(
        <input type='date' onChange={handleChange} {...otherProps}/>
    );
}

export default DateInput;