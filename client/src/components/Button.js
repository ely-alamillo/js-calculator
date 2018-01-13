import React, { Component } from 'react';

const Button = (props) => {
    return (
        <input
            type="button"
            value={props.label}
            onClick={props.handleClick}
        />
    );
};

export default Button;