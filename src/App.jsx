import { useState } from 'react'
import './App.css'

import SignIn from './components/login/SignIn'
import Main from './components/message/Main';
import  {signInEnabled}  from "../config.json";

function App() {

  const [name, setName] = useState("")
  console.log(name);

  return (
    (signInEnabled && name === "") ? (
      <SignIn setName={setName}/>
  ): (
      <Main name={name}/>
    )
  )
}

export default App
