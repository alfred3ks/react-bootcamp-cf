import React from 'react'
import Articles from './containers/Articles';
import Header from './containers/Header';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <div>
      {/*Ahora usamos context para nuestro componentes */}
      <UserProvider>
        <Header />
        <Articles theme={{ colors: { background: 'crimson' } }} />
      </UserProvider>
    </div>
  );
}

export default App;
