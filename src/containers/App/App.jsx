import React from 'react';
// import styles from './App.module.scss';
import Header from "../../components/Header";
import Article from "../../components/Article";
// import { articles } from "./data.js";

class App extends React.Component {
  render() {
    return (
      <body>
        <header>
          <Header />
        </header>
        <main>
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
        </main>
      </body>
    )
  }
}

export default App;