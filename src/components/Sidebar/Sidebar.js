import React, { useState, useEffect } from 'react';
import "../css/Sidebar.css";
import TablistButton from "../TablistButton/TablistButton";

function Sidebar(props) {
    const { changeActivePage } = props;
    
    const [appState, changeState] = useState({
        activePage: props.objects.activePage,
        objects: props.objects.objects
    });

    const click = (index) => {
        changeState({ ...appState, activePage: index });
        changeActivePage(index);
    }

    const changeStateActive = (index) => {
        changeState({ ...appState, activePage: index });
    }

    useEffect(() => {
        changeStateActive(props.objects.activePage);
        
        return (
            null
        )
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.objects.activePage]);

    function toggleActiveStyles(index) {
        if (appState.objects[index].id === appState.activePage) {
            return "list-button btn btn-block px-2 active";
        } else {
            return "list-button btn btn-block px-2 inactive";
        }
    }

    return (
        <div className="tablist-container">
            <ul className="tablist m-0 list-unstyled">
                {appState.objects.map((data, index) => (
                    <li key={index} style={data.id === 6 && !props.data.mempelai.statusPerkawinan ? {cursor: "not-allowed"} : {}} >
                        <TablistButton 
                            object={data} 
                            class={toggleActiveStyles(index)}
                            onClick={click} 
                            disabled={!props.data.mempelai.statusPerkawinan}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;
