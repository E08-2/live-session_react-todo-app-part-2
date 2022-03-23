import React from "react";
import DoneItem from "./DoneItem";

const DoneList = props => {
    return (
        <div>
            {
                props.data.map(item => {
                    return <DoneItem content={item.text} />
                })
            }
        </div>
    );
}

export default DoneList;