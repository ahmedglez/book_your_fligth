import React from 'react';
import "./style.css"



const TotalPassengers = (props) => {  
  
  
 
const showModal = () => {
  debugger
  if(props.openModal ===true){
    props.setOpenModal(false)
  }else{
    props.setOpenModal(true)
  }
}
 



  

  return (
        <React.Fragment>
          <div className="btn" onClick={showModal}>
            <button><span></span></button>
            <span >passengers:{props.total}   -  price:{props.price}$</span>
          </div>
         
        </React.Fragment>
     
      
    
  );
}

export {TotalPassengers};