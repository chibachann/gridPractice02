import * as React from 'react';
import * as styles from './section03.module.css';

const Section03 = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Section 03</h1>
        <div className={styles.grid}>
            <div className={`${styles.box} ${styles.box1}`}>Box 1</div>
            <div className={`${styles.box} ${styles.box2}`}>Box 2</div>
            <div className={`${styles.box} ${styles.box3}`}>Box 3</div>
            <div className={`${styles.box} ${styles.box4}`}>Box 4</div>
        </div>
    </div>
  );
};

export default Section03;
