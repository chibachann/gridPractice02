import * as React from 'react';
import * as styles from './section02.module.css';

const Section02 = () => {
  return (
    <section id="section02" className={styles.section02}>
      <div className={styles.container}>
          <h1 className={styles.title}>Section 02</h1>
          <div className={styles.grid}>
              <div className={`${styles.box} ${styles.box1}`}>
                <div className={styles.box1Row1}>Concept</div>
                  <div className={styles.box1Row2}>
                    素晴らしい日本の暮らしに<br />
                    そっと溶け込む
                  </div>
              </div>
              <div className={`${styles.box} ${styles.box2}`}>
                <img src="images/section02_box2.webp" alt="box2" />
              </div>
              <div className={`${styles.box} ${styles.box3}`}>
                <div className={`${styles.box3Rows} ${styles.box3Row1}`}>
                  それは、懐かしいけど新しい出会い。<br />
                  いつしか記憶の彼方に潜むようになっていた人と人のつながりをあたたかく確信できるひととき。窓からのぞむ景色のたおやかさと、やわらかい声に見守られる安心感に忘れかけていた大切なことに気づきます。
                </div>
                <div className={`${styles.box3Rows} ${styles.box3Row2}`}>
                  ここは、妙高、人の麓。
                  思う存分遊んだり、心を解き放つことの大切さがにじむ里。古き良き日本の暖かさが広がるこの里山で心地よい時間をお過ごしください。
                </div>
                <div className={`${styles.box3Rows} ${styles.box3Row3}`}>
                  <a href='/'>View more</a>
                </div>
              </div>
              <div className={`${styles.box} ${styles.box4}`}>
                <img src="images/section02_box4.webp" alt="box4" />
              </div>
              <div className={`${styles.box} ${styles.box5}`}>
                <img src="images/section02_box5.webp" alt="box5" />
              </div>
          </div>
      </div>
    </section>
  );
};

export default Section02;
