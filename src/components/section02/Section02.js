// Section02.js
import * as React from 'react';
import * as styles from './Section02.module.css';

const Section02 = () => {
  return (
    <section id="section02" className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.sectionTitle}>Section 02</h1>
        <div className={styles.grid}>
          <div className={`${styles.box} ${styles.title}`}>
            <div className={styles.titleRowTop}>Concept</div>
            <div className={styles.titleRowBottom}>
              素晴らしい日本の暮らしに<br />
              そっと溶け込む
            </div>
          </div>
          <div className={`${styles.box} ${styles.pictureRight}`}>
            <img src="images/section02PictureRight.webp" alt="rightPicture" />
          </div>
          <div className={`${styles.box} ${styles.text}`}>
            <div className={styles.textRow1}>
              それは、懐かしいけど新しい出会い。<br />
              いつしか記憶の彼方に潜むようになっていた人と人のつながりをあたたかく確信できるひととき。窓からのぞむ景色のたおやかさと、やわらかい声に見守られる安心感に忘れかけていた大切なことに気づきます。
            </div>
            <div className={styles.textRow2}>
              ここは、妙高、人の麓。<br />
              思う存分遊んだり、心を解き放つことの大切さがにじむ里。古き良き日本の暖かさが広がるこの里山で心地よい時間をお過ごしください。
            </div>
            <div className={styles.textRow3}>
              <a href='/'>View more</a>
            </div>
          </div>
          <div className={`${styles.box} ${styles.pictureLeft}`}>
            <img src="images/section02PictureLeft.webp" alt="leftPicture" />
          </div>
          <div className={`${styles.box} ${styles.pictureBottom}`}>
            <picture>
              <source media="(max-width: 480px)" srcset="images/section02_mobile_Picuture.webp" />
              <img src="images/section02PictureBottom.webp" alt="bottomPicture" />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section02;
