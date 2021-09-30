import React from "react";
import {TitleComponent} from "../TitleComponent"
import './style.css'

function MuralComponent({openModal, setOpenModal, total, openClassSelection, setOpenClassSelection}){

    const desactivarModal = () =>{
        if(openModal){
            setOpenModal(!openModal)
        }
        if(openClassSelection){
            setOpenClassSelection(false)
        }
    }

    return(
        <React.Fragment>
            
            <div className='mural' onClick={desactivarModal}></div>  
            <TitleComponent openModal={openModal} setOpenModal={setOpenModal} total={total}/>

           
        </React.Fragment>
    )
}

export {MuralComponent}