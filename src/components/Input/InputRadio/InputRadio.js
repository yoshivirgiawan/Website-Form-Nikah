import React from 'react';

function InputRadio(props) {
    const {onChangeInput} = props;

    const setData = (e) => {
        onChangeInput(props.name, e.target.value);
    }

    return (
        <div className="input-text form-group" style={{width: props.width}}>
            <label style={{textTransform: "capitalize"}} className="text-dark d-block">{props.label}</label>
            {props.data.map((data, index) => (
                <div className="custom-control custom-radio custom-control-inline margin-right-30" style={{zIndex: 0}} key={index}>
                    <input 
                        value={props.data[index]} 
                        type="radio" 
                        id={`${props.name}${index}`} 
                        name={`${props.name}`} 
                        checked={props.dataCheck === props.data[index]}
                        className="custom-control-input" 
                        onChange={(event) => setData(event)} 
                    />
                    <label className="custom-control-label" htmlFor={`${props.name}${index}`}>{data}</label>
                </div>
            ))}
        </div>
    );
}

export default InputRadio;