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
        <div className={styles.logo}>
            <img src="/images/logo.svg" alt="Logo" />
        </div>
        <div className={styles.nav}>
            <ul>
                <li><a href="/">About</a></li>
                <li><a href="/">Room</a></li>
                <li><a href="/">Dining</a></li>
                <li><a href="/">Experience</a></li>
                <li><a href="/">Creative Space</a></li>
                <li><a href="/">News</a></li>
                <li><a href="/">Access</a></li>
            </ul>
        </div>
  

      </div>
    </section>
  );
};

export default Section01;
