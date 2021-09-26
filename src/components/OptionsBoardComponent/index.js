import React from "react";
import { RadioButtonMenuFligths } from "../RadioButtonMenuFligths";
import { InputsBoardContainer } from "../InputsBoardContainer";
import { SearchButton } from "../SearchButton";
import { TotalPasengersDropdownMenu } from "../TotalPasengersDropdownMenu"
import './style.css'

function OptionsBoardComponent(){

    return(
        <React.Fragment>
            
            <div className="OptionsBoardComponent-container">
            <RadioButtonMenuFligths/> 
            <TotalPasengersDropdownMenu/>
            <InputsBoardContainer/>  
            <SearchButton/>
            </div>
            
        </React.Fragment>
    )
}


export {OptionsBoardComponent}