import { useState } from 'react'


function App() {
  return (
    <header className="App">
      <img className='App-logo' src="./src/assets/bag.svg" alt="Logo" />
      <img className='App-login' src="../src/assets/login.svg" alt="Login" />
      <img className='App-cart' src="../src/assets/cartempty.svg" alt="Cart" />
      <h1 onClick={Click} className='App-title'>Shoppee Market</h1> 
      
    </header>
  )
}

function Click(){
return alert("Anda Ok")
}

export default App
