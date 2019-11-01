import React, { Component } from "react";
import styles from "./Header.module.scss";

class Header extends Component {
  render() {
    return (
      <section className={styles.headerBody}>
        <a className={styles.headerLinks} href="#">Home</a>
        <a className={styles.headerLinks} href="#">News</a>
        <a className={styles.headerLinks} href="#">What's On</a>
        <a className={styles.headerLinks} href="#">Eat + Drink</a>
        <a className={styles.headerLinks} href="#">Lifestyle</a>
        <a className={styles.headerLinks} href="#">Swag</a>
        <a className={styles.headerLinks} href="#">Escapes</a>
        <a className={styles.headerLinks} href="#">Christmas</a>
      </section>
    )
  }
}

export default Header;