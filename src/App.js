import React from 'react';
import logo from './logo.svg';
import './App.css';
//import notify from './notify';

function App() {
    const onClick = () => {
        //notify();
        import('./notify').then(result => result.default());
    }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p onClick={onClick}>Hello React</p>
      </header>
    </div>
  );
}

export default App;
