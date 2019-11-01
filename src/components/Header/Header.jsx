import React, { Component } from "react";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

class Header extends Component {
  render() {
    return (
      <section className={styles.headerBody}>
        <img className={styles.headerLogo}
          src="https://tanakatsu.co.uk/wp-content/uploads/2019/03/LOTI-Green-Hi-Res.jpg"
          alt="LOTI logo"
        />
        <a className={styles.headerLinks} href="#">Home</a>
        <a className={styles.headerLinks} href="#">News</a>
        <a className={styles.headerLinks} href="#">What's On</a>
        <a className={styles.headerLinks} href="#">Eat + Drink</a>
        <a className={styles.headerLinks} href="#">Lifestyle</a>
        <a className={styles.headerLinks} href="#">Swag</a>
        <a className={styles.headerLinks} href="#">Escapes</a>
        <a className={styles.headerLinks} href="#">Christmas</a>
        <FontAwesomeIcon className={styles.headerBurger} icon={faBars} />
      </section >
    )
  }
}

export default Header;