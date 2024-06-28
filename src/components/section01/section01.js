import * as React from 'react';
import * as styles from './section01.module.css';

const Section01 = () => {
  return (
    <section id="section01" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.image}>
          <img src="images/top.jpg" alt="Top" />
        </div>
        <div className={styles.title}>
          Experience Serene Escape<br />
          at MAHORA Nishinoya
        </div>
  

      </div>
    </section>
  );
};

export default Section01;
