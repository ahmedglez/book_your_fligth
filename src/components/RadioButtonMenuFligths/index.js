import React from "react";

import "./style.css"


function RadioButtonMenuFligths(){

    return(
        <React.Fragment>
            
            <div className="RadioButtonItem-container"></div>
            <input type="radio" id="round_trip" name="rb" value="Round trip"  />
            <label htmlFor="round_trip">Round trip</label>
            <input type="radio" id="one_way" name="rb" value="One way"/>
            <label htmlFor="one_way">One way</label>
            <input type="radio" id="multi_destination" name="rb" value="Multi destination"/>
            <label htmlFor="multi_destination">Multi destination</label>
            
        </React.Fragment>
        
    )
}

export {RadioButtonMenuFligths}