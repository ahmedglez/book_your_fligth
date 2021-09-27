
import {MuralComponent} from "./components/MuralComponent"
import {TitleComponent} from "./components/TitleComponent"
import {OptionsBoardComponent} from "./components/OptionsBoardComponent"
import React from 'react';
import './App.css';

import { Modal } from "./components/Modal"

function App() {
  const [openModal, setOpenModal] = React.useState(false);
  
  

  const data = [
    {
      name:"Adults",
      cant:0
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
  const [total,setTotal] = React.useState(0);
  const [price,setPrice] = React.useState(0);
  
 
  
  return (
    <React.Fragment> 

      
           
      <MuralComponent openModal={openModal} setOpenModal={setOpenModal}/>             
     
      <OptionsBoardComponent openModal={openModal} setOpenModal={setOpenModal} total={total} setTotal={setTotal} price={price} setPrice={setPrice}/>

      {!!openModal &&
      <Modal mydata={mydata} setData={setData} total={total} setTotal={setTotal} price={price} setPrice={setPrice}/>     
      }
      


    </React.Fragment>
  );
}

export default App;
