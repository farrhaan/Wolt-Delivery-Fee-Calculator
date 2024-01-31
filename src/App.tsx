import React from 'react';
import "./Fonts/Omnes-Regular.ttf";
import './App.scss';
import CalculatorForm from './Components/CalculatorForm';
import HomeLeftPanel from './Components/HomeLeftPanel';

function App() {
  return (
    <div className="home">
      <div className="home__left">
        <HomeLeftPanel />
      </div>
      <div className='home__right'>
        <CalculatorForm />
      </div>
    </div>
  );
}

export default App;
