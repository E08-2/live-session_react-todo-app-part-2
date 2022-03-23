import React from "react";

const DoneItem = props => {
    return (
        <div className="todo">{props.content} <span className="delete">X</span></div>
    )
}

export default DoneItem;