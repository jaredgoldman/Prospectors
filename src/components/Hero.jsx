import React from 'react';
import Socials from './Socials';
import * as styles from './Hero.module.scss';

export default function Hero({
  includeSocials,
  leftHeading,
  leftImage,
  rightContent,
  price,
  priceSubtitle,
  style,
}) {
  const rootStyle = [styles.root, styles[style]].join(' ');
  const imageContainerStyle = [
    styles.imageContainer,
    styles[leftImage.style],
  ].join(' ');

  return (
    <div className={rootStyle}>
      {includeSocials && (
        <div className={styles.socials}>
          <Socials />
        </div>
      )}
      <section className={styles.container}>
        <div className={styles.left}>
          <div className={styles.leftHeading}>
            <h1>{leftHeading}</h1>
          </div>
          {leftImage && (
            <div className={imageContainerStyle}>
              <img src={leftImage.src} />
            </div>
          )}
        </div>
        <div className={styles.right}>
          {rightContent}
          {price && <p className={styles.price}>{price}</p>}
          {priceSubtitle && (
            <p className={styles.priceSubtitle}>{priceSubtitle}</p>
          )}
        </div>
      </section>
    </div>
  );
}
