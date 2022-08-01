import React from 'react'
import Articles from './containers/Articles';
import Header from './containers/Header';

function App() {
  return (
    <div>
      <Header />
      <Articles theme={{ colors: { background: 'crimson' } }} />
    </div>
  );
}

export default App;
