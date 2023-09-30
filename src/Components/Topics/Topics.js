import React from "react";
import './Topics.css';




const Topics = ({ name }) => {
    const arr = name.split(",");
    return (
        <>
            {arr.map((n,index) => {
                return (
                    <span  key={index} className="span-1">{n}</span>
                )
            })}

        </>
    );

}

export default Topics;