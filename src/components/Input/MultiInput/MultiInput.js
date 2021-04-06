import React, { useEffect, useState } from 'react';

function MultiInput(props) {
    //let multiInput = [];
    // const data = [];
    const [dataView, setDataView ] = useState([]);
    const [multiInput, setMultiInput] = useState([]);

    const {onChangeInput} = props;

    useEffect(() => {
        const indent = () => {
            setDataView((oldArray) => [...oldArray, {namaSurat: "", model: ""}]);
        }
        
        for (let i = 0; i < props.count; i++) {
            setMultiInput((oldArray) => [...oldArray, i]);
            indent();
        }
    },[props.count])

    const setData = (e, index) => {
        if (e.target.id.includes("namaLampiran")) {
            dataView[index].namaSurat = e.target.value;
        } else if (e.target.id.includes("modelLampiran")) {
            dataView[index].model = e.target.value;
        }
        
        onChangeInput(props.name, dataView);
    }

    // const indent = () => {
    //     data.push({
    //         namaSurat: "",
    //         model: ""
    //     })
    // }




    const input = multiInput.map((data, index) => (
        <div className="d-flex" key={data}>
            <div className="form-group" style={{width: props.width}}>
                <input 
                    defaultValue="" 
                    onChange={(event) => setData(event, index)} 
                    type={props.type} 
                    className="form-control p-4" 
                    id={`${props.nameID[0]}${index}`}
                    placeholder={props.placeholder[0]} 
                />
            </div>
            <div className="form-group ml-4" style={{width: props.width}}>
                <input 
                    defaultValue="" 
                    onChange={(event) => setData(event, index)} 
                    type={props.type} 
                    className="form-control p-4" 
                    id={`${props.nameID[1]}${index}`}
                    placeholder={props.placeholder[1]} 
                />
            </div>
        </div>
    ))

    // useEffect(() => {
    //     onChangeInput(props.name, data);
        
    //     return () => (
    //         null
    //     )
    // }, [data, onChangeInput, props.name])

    

    return (
        <div className="input-text form-group mb-0">
            <label style={{textTransform: "capitalize"}} className="text-dark">{props.label}</label>
            {input}
        </div>
    );
}

export default MultiInput;