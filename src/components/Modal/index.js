import React from 'react';


import "./style.css"


function Modal({children}){
    return (
        <div className="ModalBackground">
            {children}
            
        </div>
        
      
    )
}
 
export {Modal}