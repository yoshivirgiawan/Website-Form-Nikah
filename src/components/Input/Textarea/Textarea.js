import React from 'react';
import "../../css/Textarea.css";

function Textarea(props) {
    const {onChangeInput} = props;

    const setData = (e) => {
        onChangeInput(props.name, e.target.value);
    }
    
    return (
        <div className="textarea-form form-group" style={{width: props.width}}>
            <label htmlFor="exampleFormControlTextarea1">{props.label}</label>
            <textarea 
                defaultValue={props.defaultValue} 
                className="form-control p-4" 
                id="exampleFormControlTextarea1" 
                placeholder={props.placeholder} 
                rows="5"
                onChange={(event) => setData(event)} 
            ></textarea>
        </div>
    );
}

export default Textarea;