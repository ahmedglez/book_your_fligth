import React from "react";
import {TitleComponent} from "../TitleComponent"
import './style.css'

function MuralComponent(){

    return(
        <React.Fragment>
            
            <div className='mural'></div>  
            <TitleComponent/>

           
        </React.Fragment>
    )
}

export {MuralComponent}