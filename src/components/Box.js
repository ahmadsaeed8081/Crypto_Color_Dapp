import React from "react";
export default function Box(color)
{
    return(
        
    <div className="middlebox">
        <div className="boxinbox" style={{ backgroundColor: color.hex }}></div>
        <div className="boxtext">{color.hex}</div>
        <div className="boxmaintext">crypto color collection</div>
    </div>
        
    )
}