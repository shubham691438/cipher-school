import './App.css';
import {useEffect, useState} from 'react'


function App() {
  const [msg,setMsg]=useState('')
  useEffect(() => {

  const BACKEND_URL=process.env.REACT_APP_BACKEND_URL
  console.log("BACKEND_URL=",BACKEND_URL)

  const  fetchData=async()=>{
    const res=await fetch(`${BACKEND_URL}/api`)
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
