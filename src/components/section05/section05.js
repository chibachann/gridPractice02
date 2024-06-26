import * as React from 'react';
import * as styles from './section05.module.css';

const Section05 = () => {
  return (
    <section id="section05" className={styles.section}>
      <div className={styles.container}>
          <div className={styles.grid}>
            
            <div className={`${styles.box} ${styles.text}`}>
              <div className={styles.textRow1}>
                Experience
              </div>
              <div className={styles.textRow2}>
                里山生活を味わえる<br />
                体験型宿泊施設
              </div>
              <div className={styles.textRow3}>
                MAHORAは、妙高の里山生活を味わえる体験型宿泊施設です。地域の豊かさ、歴史、風土を交流を通して里山ならではの特別なひとときをお過ごしください。
              </div>
              <div className={styles.textRow4}>
                <a href='/'>View more</a>
              </div>
            </div>
            <div className={`${styles.box} ${styles.pictureRight}`}>
              <img src="images/section05PictureRight.webp" alt="rightPicture" />
            </div>
            
          </div>
      </div>
    </section>
  );
};

export default Section05;
