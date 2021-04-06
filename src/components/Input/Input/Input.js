import React from 'react';
import '../../css/Input.css';

function Input(props) {
    const {onChangeInput} = props;

    const setData = (e) => {
        onChangeInput(props.name, e.target.value);
    }

    return (
        <div className="input-text form-group" style={{width: props.width}}>
            <label style={{textTransform: "capitalize"}} className="text-dark">{props.label}</label>
            <input 
                defaultValue={props.defaultValue} 
                onChange={(event) => setData(event)} 
                type={props.type} 
                className="form-control p-4" 
                id={props.id} 
                aria-describedby="emailHelp" 
                placeholder={props.placeholder} 
            />
        </div>
    );
}

export default Input;