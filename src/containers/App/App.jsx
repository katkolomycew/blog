import React from 'react';
import styles from './App.module.scss';
import Header from "../../components/Header";

class App extends React.Component {
  render() {
    return (
      <body>
        <header className={styles.appHeader}>
          <img className={styles.appLogo}
            src="https://tanakatsu.co.uk/wp-content/uploads/2019/03/LOTI-Green-Hi-Res.jpg"
            alt="LOTI logo"
          />
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