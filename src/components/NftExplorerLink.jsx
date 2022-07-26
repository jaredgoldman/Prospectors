import React from 'react';
import * as styles from './NftExplorerLink.module.scss';
import { StaticImage } from 'gatsby-plugin-image';

export default function NftExplorerLink({ heading, link }) {
  return (
    <div className={styles.root}>
      {heading && <h3 className={styles.heading}>{heading}</h3>}
      <a href={link} target='_blank' className={styles.link}>
        <StaticImage
          src='../images/nftx.png'
          alt={`nft explorer link for ${heading}`}
          layout='fixed'
          height={100}
          width={100}
        />
      </a>
    </div>
  );
}
