import './App.css';
import Header from './MyComponents/Header';
import {Todos} from './MyComponents/Todos';
import {Footer} from './MyComponents/Footer';
import React, { useState } from 'react';

function App() {

  const [todos, setTodos] = useState([

    {
        sno: 1,
        title: "Go to Gulshan",
        desc: "I have to go to Gulshan-e-Iqbal market to make new glasses"
    },
    {
        sno: 2,
        title: "Hair Cutting",
        desc: "I need to have a hair cut today"
    },
    {
        sno: 3,
        title: "Packing",
        desc: "I have to complete packing tonight"
    }
]);


const onDelete = (todo)=>{
  console.log("I am onDelete of todo: ",todo);
  setTodos(todos.filter((e)=>{
    return e !== todo;
  }))
}

  return (
    <>
      <Header title ="My Todos List" searchBar={false}/>
      <p className="text-center">This is my Todos List Application developed in React JS</p>
      <p className="text-center">This is my Todos List Application developed in React JS</p>
      <Todos todos = {todos} onDelete={onDelete}/>
      <Footer />
    </> 
  );
}

export default App;
