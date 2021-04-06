import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import '../../css/InputDropdown.css';

function InputDropdown(props) {
    const animatedComponents = makeAnimated();
    const {onChangeInput} = props;

    const setData = (e) => {
        onChangeInput(props.name, e.value);
    }

    return (
        <div className="form-group" style={{width: props.width}}>
            <label style={{textTransform: "capitalize"}} className="text-dark">{props.label}</label>
            <Select
                defaultInputValue={props.defaultValue}
                onChange={(event) => setData(event)} 
                className="font-size-14"
                placeholder={props.placeholder}
                closeMenuOnSelect={true}
                components={animatedComponents}
                options={props.data}
            />
        </div>
    );
}

export default InputDropdown;