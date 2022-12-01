import React from 'react';
import './App.css';
import { Home } from './pages';
import { StrictMode } from 'react';
import { Header } from './components';

function App() {
  return (
    <StrictMode>
      <Header />
      <Home />
    </StrictMode>
  );
}

export default App;
