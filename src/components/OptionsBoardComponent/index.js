import React from "react";
import { RadioButtonMenuFligths } from "../RadioButtonMenuFligths";
import { InputsBoardContainer } from "../InputsBoardContainer";
import { SearchButton } from "../SearchButton";
import { TotalPassengers } from "../TotalPasengers";
import { OriginDestinationContainer } from "../OriginDestinationContainer";
import { CalendarContainer } from "../CalendarContainer"
import { ClassTypeContainer } from "../ClassTypeContainer"
import './style.css'

function OptionsBoardComponent({openModal, setOpenModal, total, setTotal, price, setPrice, multidestination, setMultidestination}){

    const airports = ["La Habana", "Madrid", "Tokio","Nueva York","Bogota","Caracas", "Londres"];
    const abrvs =["LH","MAD","TK","NY","BG","CAR","LON"]


    const desactivarModal = () =>{
        if(openModal){
            setOpenModal(!openModal)
        }
    }

    let random1 =Math.floor(Math.random() * 7);
    let random2 = Math.floor(Math.random() * 7);
    while(random1===random2){
        random2=Math.floor(Math.random() * 7);
    }
   
    let fligths_container = null;


        if(multidestination){
            fligths_container =
            <div className="group-container">
            <div className="airports-container">
             <OriginDestinationContainer airports={airports} abrvs={abrvs} index1={random1} index2={random2}/>
            <button>Agregar destino</button>
            </div>



            <div className="calendar-container">
                <CalendarContainer/>
            </div>

            <div className="classflight-container">
                <ClassTypeContainer/>
            </div>


            <div className="button-container">
                <button>Buscar Vuelo</button>
            </div>
            </div>
            
        }else{
            fligths_container =
            <div className="group-container">
            <div className="airports-container">
            <OriginDestinationContainer airports={airports} abrvs={abrvs} index1={random1} index2={random2}/>
            </div>
             <div className="calendar-container">
             <div className="fecha-container">
                <h4>Despegue</h4>
                <button><h4>Fecha1</h4></button>
             </div>
             <div className="fecha-container">
             <h4>Arribo</h4>
                <button><h4>Fecha2</h4></button>
             </div>
         </div>
         <div className="classflight-container">
                <ClassTypeContainer/>
            </div>

            
         </div>            
        }
    
   
    

    return(
        <React.Fragment>
            
            <div  className="OptionsBoardComponent-container" onClick={desactivarModal}>


            <RadioButtonMenuFligths price={price} setPrice={setPrice} multidestination={multidestination} setMultidestination={setMultidestination}/> 
            <TotalPassengers openModal={openModal} setOpenModal={setOpenModal} total={total} setTotal={setTotal} price={price} setPrice={setPrice}/>
            <InputsBoardContainer/>  
            <SearchButton/>



            <div className="menu2">
                {fligths_container}
                <ClassTypeContainer/>

            </div>


            </div>

            
            
        </React.Fragment>
    )
}


export {OptionsBoardComponent}