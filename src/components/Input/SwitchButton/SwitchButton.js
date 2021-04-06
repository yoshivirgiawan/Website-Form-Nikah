import React from 'react';
import Switch from "react-switch";

function SwitchButton(props) {
    const {onChangeInput} = props;
    
    const setData = (checked) => {
        console.log(checked);
        onChangeInput(props.name, checked);
    }

    return (
        <div className="form-group">
            <label htmlFor="material-switch" className="d-flex align-items-center">
                <span style={{textTransform: "capitalize"}} className="text-dark mr-4">{props.label}</span>
                <Switch
                    checked={props.statusPerkawinan}
                    onChange={(checked) => setData(checked)}
                    onColor="#86d3ff"
                    onHandleColor="#2693e6"
                    handleDiameter={15}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                    activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                    focusBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                    height={20}
                    width={40}
                    className="react-switch"
                    id="material-switch"
                />
            </label>
        </div>
        
                    
    );
}

export default SwitchButton;