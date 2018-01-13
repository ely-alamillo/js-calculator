import React, { Component } from 'react';

const Display = (props) => {
    return (
        <div className="display">
            <input
                type="text"
                value={props.value ? props.value : '0'}
            />
        </div>
    );
};

export default Display;