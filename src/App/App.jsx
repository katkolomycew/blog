import React from 'react';
import logo from '../../src/logo.svg';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <h1 className={styles.test}>asasasa</h1>
      <header className={styles.appHeader}>
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
      </header>
    </div>
  );
}

export default App;
