
import {MuralComponent} from "./components/MuralComponent"

import {OptionsBoardComponent} from "./components/OptionsBoardComponent"
import React from 'react';
import './App.css';
import { AddPasenger } from "./components/AddPasenger";

import { Modal } from "./components/Modal"
import { ClassSelector } from "./components/ClassSelector"


function App() {
  const [openModal,  setOpenModal] = React.useState(false);
  
  

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


const classes =["Economic Class","Premium Class","Business Class","First Class"]
  const [mydata] = React.useState(data);   
  const [total,setTotal] = React.useState(1);
  const [price,setPrice] = React.useState(150);
  const [multidestination, setMultidestination] = React.useState(false);
  const [selectedClass, setSelectedClass]=React.useState(classes[0])
  const [openClassSelection, setOpenClassSelection] = React.useState(false);
  
  

 let addPassenger =
  <AddPasenger mydata={mydata}  total={total} setTotal={setTotal} price={price} setPrice={setPrice} />


  let chooseClass = 
  <ClassSelector classes={classes} setSelectedClass={setSelectedClass} setOpenClassSelection={setOpenClassSelection}/>
 

  let random1 =Math.floor(Math.random() * 7);
    let random2 = Math.floor(Math.random() * 7);
    while(random1===random2){
        random2=Math.floor(Math.random() * 7);
    }
  
   
   
  return (
    <React.Fragment> 

      
           
      <MuralComponent openModal={openModal} setOpenModal={setOpenModal} total={total} openClassSelection={openClassSelection} setOpenClassSelection={setOpenClassSelection}/>             
     
      <OptionsBoardComponent openModal={openModal} setOpenModal={setOpenModal} total={total} setTotal={setTotal} price={price} setPrice={setPrice} multidestination={multidestination} setMultidestination={setMultidestination}  random1={random1} random2={random2} selectedClass={selectedClass} setSelectedClass={setSelectedClass} classes={classes} openClassSelection={openClassSelection}  setOpenClassSelection={setOpenClassSelection}  />      
      

      {openModal &&
      <Modal children={addPassenger}/>     
      }

      {openClassSelection &&
      <Modal children={chooseClass}/>}
       
       {openClassSelection &&
      <Modal children={<ClassSelector setSelectedClass={setSelectedClass} classes={classes}/>}/>     
      }


      

      
      


     


    </React.Fragment>
  );
}

export default App;
