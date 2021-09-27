
import React from "react";
import './style.css'

function TitleComponent({openModal, setOpenModal}){
   
  let text ="we will help you find the right flight"
  if(openModal){
     text="please select the type of passenger to board"   
  }

  const desactivarModal = () =>{
    if(openModal){
        setOpenModal(!openModal)
    }
}
 
    return(
        <React.Fragment>
            <div onClick={desactivarModal}>
               <h1>Start your journey!</h1>
               <h2>{text}</h2>
            </div>           
        </React.Fragment>
    )
}

export {TitleComponent}