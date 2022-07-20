import React from 'react';
import './css/App.css'
import Counter from './views/Counter/Counter';
import CounterTwo from './views/CounterTwo/CounterTwo';

function App() {

  return (
    <div className='app'>
      <h1>Repaso de Hooks</h1>
      <Counter />
      <CounterTwo />

    </div>
  )
}

export default App
