import * as React from 'react';
import * as styles from './section03.module.css';

const Section03 = () => {
  return (
    <section id="section03" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.title}>
            妙高の麓に佇む<br />
            一棟貸しの宿
          
        </div>
        <div className={styles.text}>
          <div className={styles.textSubTitle}>
            Room
          </div>
          <div className={styles.textTitle}>
            古きを新たに。<br />
            匠の技で蘇る築120年<br />
            の古民家を体感する
          </div>
          <div className={styles.textRow}>
            築120年を超える古民家を匠の技術で再生しました。古い材と新しい材が継がれた箇所を見ることができ、日本の伝統工法である継手を知ることができるお部屋です。土と木の香りに身を染め、心身が安らぐ感覚をご体感ください。
          </div>
          <div className={styles.textRow}>
            <a href='/'>View more</a>
          </div>
        </div>
        <div className={styles.pictureLeft}>
          <img src="images/section03PictureLeft.webp" alt="leftPicture" />
        </div>
      </div>
    </section>
  );
};

export default Section03;
