import React from "react";
import "./style.css"

function TotalPasengerDropDownItem({ value ,mydata,  total, setTotal, price, setPrice}){

const[value2, setValue2] = React.useState(value);

    /*
        Los adultos cuestan 150$, adolescentes 90$, los niños 50$ y los bebes 30$
    */



    const restar_cant = () =>{
        if(total>0 ){
        let newValue = value2;
        newValue.cant-=1;
        setValue2(newValue);
        setTotal(total-1)
        
        // eslint-disable-next-line default-case
        switch(value.name){
            case "Adults" : setPrice(price - 150);
                break;
            case "Teenagers": setPrice(price - 90);
                break;
            case "Childrens": setPrice(price-50);
                break;
            case "Babys": setPrice(price-30);
                break;
        }
    }
    }

    const sumar_cant = () => {
        if(total<10){
        let newValue = value2;
        newValue.cant+=1;
        setValue2(newValue);
        setTotal(total+1)        
        // eslint-disable-next-line default-case
        switch(value.name){
            case "Adults" : setPrice(price + 150);
                break;
            case "Teenagers": setPrice(price + 90);
                break;
            case "Childrens": setPrice(price+50);
                break;
            case "Babys": setPrice(price+30);
                break;
        }
    }
    }

    


    return(
        <React.Fragment>
            
            <button type="button" className="dropdown-menu-item" ><span>{value2.name}</span> : <span>{value2.cant}</span> <span id="restar" onClick={restar_cant}> - </span><span type="" id="sumar" onClick={sumar_cant}> + </span>
            </button>
            
        </React.Fragment>
    )
}



export {TotalPasengerDropDownItem}