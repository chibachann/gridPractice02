// Section07.js
import * as React from 'react';
import * as styles from './Section07.module.css';

const Section07 = () => {
  return (
    <section id="section07" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.title}>
          <div className={styles.titleTop}>Concept</div>
            <div className={styles.titleBottom}>
              素晴らしい日本の暮らしに<br />
              そっと溶け込む
            </div>
        </div>
        <div className={styles.text}>
            <div className={styles.textRow}>
              それは、懐かしいけど新しい出会い。<br />
              いつしか記憶の彼方に潜むようになっていた人と人のつながりをあたたかく確信できるひととき。窓からのぞむ景色のたおやかさと、やわらかい声に見守られる安心感に忘れかけていた大切なことに気づきます。
            </div>
            <div className={styles.textRow}>
              ここは、妙高、人の麓。<br />
              思う存分遊んだり、心を解き放つことの大切さがにじむ里。古き良き日本の暖かさが広がるこの里山で心地よい時間をお過ごしください。
            </div>
            <div className={styles.textRow}>
              <a href='/'>View more</a>
            </div>
          </div>
        <div className={styles.pictureRight}>
          <img src="images/section02PictureRight.webp" alt="rightPicture" />
        </div>
        <div className={styles.pictureLeft}>
          <img src="images/section02PictureLeft.webp" alt="leftPicture" />
        </div>
        <div className={styles.pictureBottom}>
          <picture>
            <source media="(max-width: 480px)" srcset="images/section02_mobile_Picture.webp" />
            <img src="images/section02PictureBottom.webp" alt="bottomPicture" />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Section07;
