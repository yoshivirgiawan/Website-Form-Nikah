import React from 'react';
import "../css/TablistButton.css";

function TablistButton(props) {
    return (
        <button className={props.class} onClick={() => props.onClick(props.object.id)} style={props.object.id === 6 && props.disabled ? {pointerEvents: "none", opacity: "0.4"} : {}} disabled={props.object.id === 6 && props.disabled}>
            <div className="d-flex justify-content-center align-items-center">
                <div className="button-number d-flex justify-content-center align-items-center">
                    N-{props.object.id}
                </div>
                <div className="button-title ml-3 text-left">
                    {props.object.title}
                </div>
            </div>
        </button>
    )
}

export default TablistButton;