import React from "react";
import {TitleComponent} from "../TitleComponent"
import './style.css'

function MuralComponent({openModal, setOpenModal}){

    const desactivarModal = () =>{
        if(openModal){
            setOpenModal(!openModal)
        }
    }

    return(
        <React.Fragment>
            
            <div className='mural' onClick={desactivarModal}></div>  
            <TitleComponent openModal={openModal} setOpenModal={setOpenModal}/>

           
        </React.Fragment>
    )
}

export {MuralComponent}