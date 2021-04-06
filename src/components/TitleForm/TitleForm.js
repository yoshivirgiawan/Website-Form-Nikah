import React from 'react';
import '../css/TitleForm.css';

function TitleForm(props) {
    return (
        <div className="title-text mt-4">
            <span style={{textTransform: "capitalize"}} className="d-block">
                {props.title}
            </span>
        </div>
    )
}

export default TitleForm;