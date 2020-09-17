import React from "react";

function Top(props){

    const add = props.onClick;
    const removeBox = props.onClick2;


    return (
        <div className="top">
            <button onClick={add}>Add</button>
            <button onClick={removeBox}>Remove</button>
        </div>
    );
}
export default Top;