import * as React from 'react';
import * as styles from './section06.module.css';

const Section06 = () => {
  return (
    <section id="section06" className={styles.section}>
      <div className={styles.container}>
          <div className={styles.grid}>
            
            <div className={`${styles.box} ${styles.title}`}>
              Creative Space
            </div>
            <div className={`${styles.box} ${styles.subtitle}`}>
              地域に開かれた<br />
              コミュニティースペース
            </div>
            <div className={`${styles.box} ${styles.text}`}>
              <div className={styles.textRow1}>
              土間内の空間には、誰でも利用できる図書茶室がある他、地元のアーティストと協力したワークショップや、全国各地からお招きした料理人との交流などたくさんのイベントをご用意しています。持ち込みの企画やリクエストも承っておりますのでお気軽にお問い合わせください。
              </div>
              <div className={styles.textRow2}>
                <a href='/'>View more</a>
              </div>
            </div>

            <div className={`${styles.box} ${styles.pictureRight}`}>
              <img src="images/section06PictureRight.webp" alt="rightPicture" />
            </div>
            <div className={`${styles.box} ${styles.pictureLeft}`}>
              <img src="images/section06PictureLeft.webp" alt="LeftPicture" />
            </div>
            <div className={`${styles.box} ${styles.pictureBottom}`}>
              <img src="images/section06PictureBottom.webp" alt="BottomPicture" />
            </div>
          </div>
      </div>
    </section>
  );
};

export default Section06;
