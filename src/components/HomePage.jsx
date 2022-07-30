import React from 'react';
import Divider from './Divider';
import Socials from './Socials';
import * as styles from './HomePage.module.scss';
import Hero from './Hero';
import prospectorsGif from '../../assets/prospectors.gif';

export default function HomePage() {
  const firstHeroContent = (
    <>
      <h1>369 MINT</h1>
      <h1>I/I PFPs</h1>
    </>
  );

  return (
    <main className={styles.root}>
      <Divider text={'WEN GOLD'} symbol=' - ' />
      <Hero
        leftHeading='PROSPECTORS'
        leftImage={{ src: prospectorsGif, style: 'normal' }}
        rightContent={firstHeroContent}
        priceSubtitle='MINT HERE - 33A'
      />
      <Divider text={'GOLD RUSH'} symbol={' - '} />
      <section className={styles.heroLower}>
        <p className={styles.paragraph}>
          369 Prospectors from the old country with nothing but diggin' tools
          and a dream are mining for gold. Roy and Little Nugget are your pals
          on this bizarre gold rush with freaky lizard skins to hollering
          clown-nosers.
        </p>
        <h2 className={styles.secondaryHeading}>ROY AND LITTLE NUGGET</h2>
        <p className={styles.heroLowerParagraphTwo}>
          Prospectors was created by Mother/Son team (Lori Dell) and Little
          Nugget (Randy Al), Lori Dell is an internationally well-established
          artist with a wide background of large canvas work to stage design.
          Now delving into AlgoNFTs with Randy's guidance following his
          successful projects Randy Cones, Randy Pixels, and Crypto Ukes.
        </p>
      </section>
      <Divider text={'NUGGETS FOR TRADE'} symbol={' - '} />
      <Socials />
    </main>
  );
}
