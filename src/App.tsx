import React from 'react';
import './App.css';
import City from './Components/Picture';
import Logo from './Assets/Logo.png'
import SignUp from './Components/SighnUp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <div className='Left'>
        <img src={Logo} alt="Logo" />
        <SignUp />
       </div>
       <div className='Right'>
       <City />
       </div>
      </header>
    </div>
  );
}

export default App;
