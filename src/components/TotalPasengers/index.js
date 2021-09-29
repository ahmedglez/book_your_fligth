import React from 'react';
import "./style.css"



const TotalPassengers = (props) => {  
  
  
 
const showModal = () => {
  if(props.openModal ===true){
    props.setOpenModal(false)
  }else{
    props.setOpenModal(true)
  }
}
 



  

  return (
        <React.Fragment>
          <div className="btn" onClick={showModal}>
            <button><span className="flecha-abajo"> ▼+ </span></button>
            <span >passengers:{props.total}   -  price:{props.price}$</span>
          </div>
         
        </React.Fragment>
     
      
    
  );
}

export {TotalPassengers};