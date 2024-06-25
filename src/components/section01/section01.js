import * as React from 'react';
import * as styles from './section01.module.css';

const Section01 = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Section 01</h1>
      <div className={styles.grid}>
        <div className={`${styles.box} ${styles.col3}`}>3 cols</div>
        <div className={`${styles.box} ${styles.col3}`}>3 cols</div>
        <div className={`${styles.box} ${styles.col3}`}>3 cols</div>
        <div className={`${styles.box} ${styles.col3}`}>3 cols</div>
        <div className={`${styles.box} ${styles.col4}`}>4 cols</div>
        <div className={`${styles.box} ${styles.col4}`}>4 cols</div>
        <div className={`${styles.box} ${styles.col4}`}>4 cols</div>
        <div className={`${styles.box} ${styles.col6}`}>6 cols</div>
        <div className={`${styles.box} ${styles.col6}`}>6 cols</div>
        <div className={`${styles.box} ${styles.col12}`}>12 cols</div>
      </div>
    </div>
  );
};

export default Section01;
