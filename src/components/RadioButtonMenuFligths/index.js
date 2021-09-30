import React from "react";
import "./style.css"


function RadioButtonMenuFligths({price, setPrice, multidestination, setMultidestination}){

    const[oneway,setoneway]=React.useState(true);
    const[roundtrip, setroundtrip]=React.useState(false);
  

    
    
    

const roundtripSelected = () =>{
   
    
    if(roundtrip===false){
        setPrice(price*2)
        setroundtrip(true);        
        setMultidestination(false);
        setoneway(false);  
        
}

}
  

const onewaySelected = () =>{
    if(!oneway){
        setoneway(true);
        if(roundtrip && price>0){
            setPrice(price/2)
        }
        setMultidestination(false)
        setroundtrip(false);
    }
}





const multidestination2Selected = () =>{
    if(!multidestination){           
        setMultidestination(true)        
        if(roundtrip && price>0){
            setPrice(price/2)
        }
        setoneway(false)
        setroundtrip(false);
    }
}
    

   

    return(
        <React.Fragment>
            
            <div className="RadioButtonItem-container">
            <input  type="radio" id="round_trip" name="rb" priceue="Round trip" onClick={roundtripSelected}/>
            <label htmlFor="round_trip">Round trip</label>
            <input type="radio" id="one_way" name="rb" priceue="One way" onClick={onewaySelected}  defaultChecked  />
            <label htmlFor="one_way">One way</label>
            <input type="radio" id="multi_destination" name="rb" priceue="Multi destination" onClick={multidestination2Selected} />
            <label htmlFor="multi_destination">Multi destination</label>
            </div>
            
        </React.Fragment>
        
    )
}


export {RadioButtonMenuFligths}