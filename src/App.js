
import './App.css';
import Header from './MyComponents/Header';
import { Footer } from './MyComponents/Footer';
import { Todos } from './MyComponents/Todos';
import { Todoitem } from './MyComponents/Todoitem';





function App() {
  let todos =[
    {
       no:1,
       title:"hi hello chhodo jay shree krishn bolo",
       desc:"bs aaj kro"
    },
    {
      no:2,
      title:"hi hello chhodo jay shree ram bolo",
      desc:"bs aaj kro"
   },
   {
    no:3,
    title:"hi hello chhodo har har mahadev bolo",
    desc:"bs aaj kro"
   },
 
  ]
  return (
    <>
        
      <Header title ="My todos list" searchBar={true}/>
      <Footer/>
      <Todos todos ={todos}/>
      
      {/* <Todoitem/> */}
       
   


    </>
  );
}

export default App;