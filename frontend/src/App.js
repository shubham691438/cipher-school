import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'

function App() {
  const [msg,setMsg]=useState('')
  useEffect(() => {
  const  fetchData=async()=>{
    const res=await fetch("/api")
    const json=await res.json()
    console.log(json)

    setMsg(json.msg)
  }
  
  fetchData()
    
  },[])
  
  return (
    <div className="App">
      <h1>hi {msg}</h1>
    </div>
  );
}

export default App;
