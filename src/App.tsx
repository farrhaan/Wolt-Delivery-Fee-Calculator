import React from 'react';
import "./Fonts/Omnes-Regular.ttf";
import './App.scss';
import CalculatorForm from './Components/CalculatorForm';

function App() {
  return (
    <div className="App">
      <h1 className=''>WOLT Delivery Fee Calculator</h1>
      <CalculatorForm />
    </div>
  );
}

export default App;
