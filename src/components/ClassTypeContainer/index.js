import React from "react";
import "./style.css"


function ClassTypeContainer({selectedClass, setSelectedClass, classes, openClassSelection, setOpenClassSelection}){
   
    const showModal2 = () =>{
        setOpenClassSelection(true)
    }
    return(
        <React.Fragment>
            <div className="btn2">
                <button onClick={showModal2}>
                <span>{selectedClass}</span>
                <span className="miflecha">►</span>
                </button>

                
                
            </div>
        </React.Fragment>
    )
}

export{ClassTypeContainer}