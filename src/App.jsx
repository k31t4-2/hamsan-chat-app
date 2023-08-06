import { useState } from 'react'
import './App.css'

import SignIn from './components/SignIn'
import Main from './components/Main';
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
