import React from "react";
import './Level.css';
const Level = ({ name }) => {

    return (
        <>

        {name == 'easy' && <span className="span-1 easy">Easy</span>}
        {name == 'medium' && <span className="span-1 medium">Medium</span>}
        {name == 'hard' && <span className="span-1 hard">Hard</span>}
        

        </>
    );

}

export default Level;