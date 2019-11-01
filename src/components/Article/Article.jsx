import React, { Component } from "react";
import styles from "./Article.module.scss";
// import { articles } from "./data.js";

class Article extends Component {
  render() {
    return (
      <section className={styles.articleBody}>
        <img
          className={styles.articleImage}
          src="https://images.unsplash.com/photo-1509557965875-b88c97052f0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          alt="halloween article"
        />
        <h1 className={styles.articleTitle}>Skeleton Date</h1>
        <article className={styles.articleText}>Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia?</article>
        <p className={styles.articleDate}>What do you mean it's November?</p>
      </section >
    )
  }
}

export default Article;