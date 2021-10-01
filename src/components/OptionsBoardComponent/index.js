import React from "react";
import { RadioButtonMenuFligths } from "../RadioButtonMenuFligths";
import { InputsBoardContainer } from "../InputsBoardContainer";
import { SearchButton } from "../SearchButton";
import { TotalPassengers } from "../TotalPasengers";
import { OriginDestinationContainer } from "../OriginDestinationContainer";

import { ClassTypeContainer } from "../ClassTypeContainer"
import './style.css'

function OptionsBoardComponent({openModal, setOpenModal, total, setTotal, price, setPrice, multidestination, setMultidestination,random1, random2, selectedClass, setSelectedClass, classes, setOpenClassSelection, openClassSelection}){
    
    const airports = ["La Habana", "Madrid", "Tokio","Nueva York","Bogota","Caracas", "Londres"];
    const abrvs =["LH","MAD","TK","NY","BG","CAR","LON"]


    const desactivarModal = () =>{
        if(openModal){
            setOpenModal(false)
           
        }
        if(openClassSelection){
            setOpenClassSelection(false)
        }
    }

    
    
    
    const[start_date, setStartDate] = React.useState("2021-09-30T19:30")
    const[end_date, setEndDate] = React.useState("2021-10-01T19:30")
    
    
    return(
        <React.Fragment>
            
            <div  className="OptionsBoardComponent-container" onClick={desactivarModal}>


            <RadioButtonMenuFligths price={price} setPrice={setPrice} multidestination={multidestination} setMultidestination={setMultidestination}/> 
            <TotalPassengers openModal={openModal}  setOpenModal={setOpenModal} total={total} setTotal={setTotal} price={price} setPrice={setPrice}/>
            <InputsBoardContainer/>  
            <SearchButton/>



            <div className="menu2">


            
            
          
            <div className="group-container">
            <div className="airports-container">
            <OriginDestinationContainer airports={airports} abrvs={abrvs} index1={random1} index2={random2}/>
            </div>
             <div className="calendar-container">
             <div className="fecha-container">
             <label for="start-date">Start date:</label>

             <input className="f-container"  type="datetime-local" id="start-date"
              onChange={(event)=>{setStartDate(event.target.value)}}
       name="meeting-time" value={start_date}
       min="2021-09-30T19:30" max="2023-09-30T19:30"/>
             </div>



             <div className="fecha-container">
             <label for="end-date">End date:</label>
             <input type="datetime-local" id="end-date"
               onChange={(event)=>{if(event.target.value>start_date){setEndDate(event.target.value)}}}
       name="meeting-time" value={end_date}
       min="2021-09-30T19:30" max="2023-09-30T19:30"/>
             </div>
         </div>
         <div className="classflight-container">
                <ClassTypeContainer selectedClass={selectedClass} setSelectedClass={setSelectedClass} classes={classes} openClassSelection={openClassSelection}  setOpenClassSelection={setOpenClassSelection}/>
            </div>

            <div className="button-container">
                <button><p>Search Flights</p></button>
                <span></span>
            </div>

            
         </div>            
        
    
   
                

            </div>


            </div>

            
            
        </React.Fragment>
    )


    
}


export {OptionsBoardComponent}