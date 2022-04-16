
import './App.css';
import Loading from './components/Loading';
import {useState,useEffect} from 'react'
import axios from 'axios';
function App() {
const [todos,setTodos] = useState('')
useEffect (()=>{
  axios.get ("https://jsonplaceholder.typicode.com/users").then((result)=>{
    setTodos(result.data);

  });
},[]);
console.log ('this',todos)
  return (
    <div className='container'>
{todos.map((el)=>
el.id

)}
    <Loading/>
    </div>
  );
}

export default App;
