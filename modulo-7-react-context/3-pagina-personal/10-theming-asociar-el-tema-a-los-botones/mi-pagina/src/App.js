import React from 'react'
import Articles from './containers/Articles';
import ArticlesObject from './containers/ArticlesObject';
import Header from './containers/Header';
import HeaderObject from './containers/HeaderObject';
import ThemeProvider from './context/ThemeContext';
import { UserProvider } from './context/UserContext';
import { UserProviderObject } from './context/UserContextObject';

export function AppObject() {
  return (
    <div>
      {/*Ahora usamos context para nuestro componentes */}
      <UserProviderObject>
        <ThemeProvider>
          <HeaderObject />
          <ArticlesObject />
        </ThemeProvider>
      </UserProviderObject>
    </div>
  );
}

export function App() {
  return (
    <div>
      {/*Ahora usamos context para nuestro componentes */}
      <UserProvider>
        <ThemeProvider>
          <Header />
          <Articles />
        </ThemeProvider>
      </UserProvider>
    </div>
  );
}

