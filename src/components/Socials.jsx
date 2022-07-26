import React from 'react';
import * as styles from './Socials.module.scss';
import { StaticImage } from 'gatsby-plugin-image';

export default function Socials() {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <a
          href='https://twitter.com/AlgoProspectors'
          target='_blank'
          className={styles.link}
        >
          <StaticImage
            src='../images/twitter.png'
            alt='twitter logo'
            layout='fixed'
            height={100}
            width={100}
          />
        </a>
        <a
          href='https://www.nftexplorer.app/collection/aFGjeB3XUAQt'
          target='_blank'
          className={styles.link}
        >
          <StaticImage
            src='../images/nft-explorer.png'
            alt='twitter logo'
            layout='fixed'
            height={100}
            width={100}
          />
        </a>
        <a
          href='https://discord.gg/s6P4XbrEB4'
          target='_blank'
          className={styles.link}
        >
          <StaticImage
            src='../images/discord.png'
            alt='discord logo'
            layout='fixed'
            height={100}
            width={100}
          />
        </a>
        <a
          href='https://randycones.xyz'
          target='_blank'
          className={styles.link}
        >
          <StaticImage
            src='../images/randy-cones.png'
            alt='discord logo'
            layout='fixed'
            height={100}
            width={150}
          />
        </a>
        <a href='https://loridell.com' target='_blank' className={styles.link}>
          <StaticImage
            src='../images/ldell.png'
            alt='lori dell personal website'
            layout='fixed'
            height={100}
            width={100}
          />
        </a>
      </div>
    </div>
  );
}
