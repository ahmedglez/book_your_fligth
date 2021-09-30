import React from "react";
import "./style.css"


function ClassSelector({classes, setSelectedClass}){

    
  
   
    return(

        <React.Fragment>
        <div className="classtype-container">
        {classes.map((value)=>{
            
            
                return(
                
                    <button type="button" className="dropdown-menu-item2" onClick={setSelectedClass(value)} >
                        <span onClick={setSelectedClass(value)}>{value}</span> 
                    </button> 
                 )
            })}
        </div>

    </React.Fragment>
)
    
}

export {ClassSelector}