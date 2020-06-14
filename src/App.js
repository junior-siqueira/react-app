import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Projeto base para a aula de CI.
          Testando o deploy automatizado.
        </p>
        <a
          className="App-link"
          href="https://fjn.edu.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          Site da FJN
        </a>
      </header>
    </div>
  );
}

export default App;
