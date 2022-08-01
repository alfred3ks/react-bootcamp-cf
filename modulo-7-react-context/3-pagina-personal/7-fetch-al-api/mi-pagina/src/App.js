import React from 'react'
import Articles from './containers/Articles';
import ArticlesObject from './containers/ArticlesObject';
import Header from './containers/Header';
import HeaderObject from './containers/HeaderObject';
import { UserProvider } from './context/UserContext';
import { UserProviderObject } from './context/UserContextObject';

export function AppObject() {
  return (
    <div>
      {/*Ahora usamos context para nuestro componentes */}
      <UserProviderObject>
        <HeaderObject />
        <ArticlesObject theme={{ colors: { background: 'crimson' } }} />
      </UserProviderObject>
    </div>
  );
}

export function App() {
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

