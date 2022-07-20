import React from 'react';
import './css/App.css'
import Counter from './views/Counter/Counter';
import CounterObj from './views/Counter/CounterOb';

function App() {

  return (
    <div className='app'>
      <h1>Repaso de Hooks</h1>
      <Counter />
      <CounterObj />
    </div>
  )
}

export default App
