import React from "react";
import "./style.css"

function OriginDestinationContainer({airports, abrvs, index1, index2}){

    return(
        <React.Fragment>
            <div className="fligth-container">
                <div className="city-container">
                     <div className="title-container">
                     <h3>from</h3>
                     </div>
                     <div className="name-container">
                         <h4>{airports[index1]}({abrvs[index1]})</h4>
                     </div>
                     <div className="change-container">
                     <button>Cambiar Ciudad <span>▼</span></button>                        
                     </div>
                 </div>
                 
                 <div className="city-container">                    
                 <div className="title-container">
                     <h3>to</h3>
                     </div>
                     <div className="name-container">
                         <h4>{airports[index2]}({abrvs[index2]})</h4>
                     </div>
                     <div className="change-container">
                     <button>Cambiar Ciudad <span>▼</span></button>                     
                     </div>
                 </div>
            </div>
        </React.Fragment>
    )
}

export{OriginDestinationContainer}