
import {MuralComponent} from "./components/MuralComponent"

import {OptionsBoardComponent} from "./components/OptionsBoardComponent"
import React from 'react';
import './App.css';

import { Modal } from "./components/Modal"

function App() {
  const [openModal, setOpenModal] = React.useState(false);
  
  

  const data = [
    {
      name:"Adults",
      cant:1
    },
    {
      name:"Teenagers",
      cant:0
    },
    {
      name:"Childrens",
      cant:0
    },
    {
      name:"Babys",
      cant:0
    }
]
  const [mydata, setData] = React.useState(data);   
  const [total,setTotal] = React.useState(1);
  const [price,setPrice] = React.useState(150);
  const [multidestination, setMultidestination] = React.useState(false);
  

 
  
  return (
    <React.Fragment> 

      
           
      <MuralComponent openModal={openModal} setOpenModal={setOpenModal} total={total}/>             
     
      <OptionsBoardComponent openModal={openModal} setOpenModal={setOpenModal} total={total} setTotal={setTotal} price={price} setPrice={setPrice} multidestination={multidestination} setMultidestination={setMultidestination}/>      
      

      {!!openModal &&
      <Modal mydata={mydata} setData={setData} total={total} setTotal={setTotal} price={price} setPrice={setPrice}/>     
      }
      


    </React.Fragment>
  );
}

export default App;
