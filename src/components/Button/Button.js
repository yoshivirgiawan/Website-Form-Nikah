import React from 'react';
import '../css/Button.css';

function Button(props) {
    return (
        <button className={`${props.styleButton} btn mt-4`}>
            {props.buttonTitle}
        </button>
    );
}

export default Button;