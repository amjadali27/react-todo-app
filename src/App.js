import './App.css';
import Header from './MyComponents/Header';
import {Todos} from './MyComponents/Todos';
import {Footer} from './MyComponents/Footer';

function App() {

  let todos = [
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
]

const onDelete = (todo)=>{
  console.log("I am onDelete of todo: ",todo);
}

  return (
    <>
      <Header title ="My Todos List" searchBar={false}/> 
      <Todos todos = {todos} onDelete={onDelete}/>
      <Footer />
    </> 
  );
}

export default App;
