import React from "react";
import { RadioButtonMenuFligths } from "../RadioButtonMenuFligths";
import { InputsBoardContainer } from "../InputsBoardContainer";
import { SearchButton } from "../SearchButton";
import { TotalPassengers } from "../TotalPasengers"
import './style.css'

function OptionsBoardComponent({openModal, setOpenModal, total, setTotal, price, setPrice}){


    const desactivarModal = () =>{
        if(openModal){
            setOpenModal(!openModal)
        }
    }
    

    return(
        <React.Fragment>
            
            <div onClick={desactivarModal} className="OptionsBoardComponent-container">
            <RadioButtonMenuFligths/> 
            <TotalPassengers openModal={openModal} setOpenModal={setOpenModal} total={total} setTotal={setTotal} price={price} setPrice={setPrice}/>
            <InputsBoardContainer/>  
            <SearchButton/>
            </div>
            
        </React.Fragment>
    )
}


export {OptionsBoardComponent}