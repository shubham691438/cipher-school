import './App.css';
import {useEffect, useState} from 'react'


function App() {
  const [msg,setMsg]=useState('')
  useEffect(() => {

  const BACKEND_URL=process.env.REACT_APP_BACKEND_URL
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
      <h1>{msg}</h1>
      <h1>Dear CipherSchools team,</h1>

      <h4>I am writing to inform you regarding the assignment that was given to me as a part of the web development internship selection procedure. I was able to complete the backend part of the assignment, which included creating API endpoints for registering the user, logging the user, updating user profile details, updating the password, updating user interests, and getting all follower details.</h4>

      <h3>I have created a public Github repository and pushed my everyday's progress. You can access it through this link [https://github.com/shubham691438/cipher-school]. Also, I have provided a link to Postman where you can test various endpoints [https://www.postman.com/aerospace-geoscientist-75610154/workspace/cipher-school-profile/request/22486951-e1dd7d12-8b5f-41d4-8638-3dbe2359384f].</h3>

      <h4>However, due to time constraints, I was not able to complete the frontend part of the assignment, which involved replicating the CipherSchools profile page and making it responsive for all types of screens. I am aware that this is an important aspect of the project, and I apologize for not being able to complete it within the given time frame.</h4>

      <h4>Nevertheless, I want to assure you that I am confident in my ability to complete the frontend part of the assignment if given more time. I have a good understanding of the technologies required for the frontend part, including React and TypeScript. Additionally, I have experience in developing responsive UIs for different screen sizes.</h4>

      <h4>Thank you for considering my application. I look forward to hearing from you soon.</h4>

<h2>Sincerely,</h2>
<h2>shubham kumar singh</h2>
    </div>
  );
}

export default App;
