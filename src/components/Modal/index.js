import React from 'react';

import { AddPasenger } from '../AddPasenger';
import "./style.css"


function Modal({mydata, setData, total, setTotal, price, setPrice}){
    return (
        <div className="ModalBackground">
            <AddPasenger mydata={mydata}  total={total} setTotal={setTotal} price={price} setPrice={setPrice} />
            
        </div>
        
      
    )
}
 
export {Modal}