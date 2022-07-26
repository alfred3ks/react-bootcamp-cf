import React from 'react';
import Articles from './containers/Articles';
import ArticlesContext from './containers/ArticlesContext';
import Header from './containers/Header';
import { UserProvider } from './contexts/UserContext';

function App() {
  return (
    <div>
      {/*Metemos todos los componentes dentro de userContentext */}
      <UserProvider>
        <Header />
        <Articles />
        <ArticlesContext />
      </UserProvider>
    </div>
  );
}

export default App;
