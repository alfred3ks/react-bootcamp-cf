import React from 'react';
// import Articles from './containers/Articles';
import ArticlesAPIFetch from './containers/ArticlesAPIFetch';
// import ArticlesContext from './containers/ArticlesContext';
// import Header from './containers/Header';
import HeaderFetch from './containers/HeaderFetch';
// import { UserProvider } from './contexts/UserContext';
import { UserProvider } from './contexts/UserContextFetch';

function App() {
  return (
    <div>
      {/* Metemos todos los componentes dentro de userContentext */}
      <UserProvider>
        <HeaderFetch />
        <ArticlesAPIFetch />
      </UserProvider>
    </div>
  );
}

export default App;
