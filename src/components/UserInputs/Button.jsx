import React from "react";

const Button = ({ type, text, ...otherProps}) => {

    return(
        <button type={type} {...otherProps}>{text}</button>
    );
}

export default Button;