import { useState } from 'react'
import '../Media-Querys.css'

function App() {
  return (
    <header className="App">
      <img className='App-logo' src="./src/assets/bag.svg" alt="logo" />
      <h1 onClick={Click} className='App-title'>Shoppee Market</h1>
    </header>
  )
}

function Click(){
return alert("Anda Ok")
}

export default App
