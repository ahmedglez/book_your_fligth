import React from "react";
import { TotalPassengers } from "../TotalPasengers";
import { TotalPasengerDropDownItem } from "../TotalPasengerDropDownItem"

import "./style.css"



function AddPasenger({mydata,  total, setTotal, price, setPrice}){
    

    return(
        <React.Fragment>
            <div className="passenger-container">
            {mydata.map((value)=>{
                
                    return(
                    
                        <TotalPasengerDropDownItem value={value} total={total} setTotal={setTotal} price={price} setPrice={setPrice}/>
                     )
                })}
            </div>

        </React.Fragment>
    )
}

export {AddPasenger}