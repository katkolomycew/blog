import React from 'react';
// import styles from './App.module.scss';
import Header from "../../components/Header";

class App extends React.Component {
  render() {
    return (
      <body>
        <header>
          <Header />
        </header>
        <main>
          Lorem ipsum.
        </main>
      </body>
    )
  }
}

export default App;