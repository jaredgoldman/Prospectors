import React from 'react';
import * as styles from './TermsAndConditions.module.scss';
import { Link } from 'gatsby';

export default function termsAndConditions() {
  return (
    <main className={styles.root}>
      <div className={styles.link}>
        <Link to='/'>Home</Link>
      </div>
      <h2> OWNERSHIP AND COMMERCIAL USE</h2>
      <br />
      <p>
        You Own the NFT. Each NFT created by Randy Al is an ASA on the Algorand
        blockchain. When you purchase a NFT, you own the underlying asset, the
        Art, completely. Ownership of the NFT is mediated by the Algorand
        blockchain: at no point may we seize, freeze, or otherwise modify the
        ownership of any Randy Al asset. Once you transfer an NFT to a wallet
        not belonging to you, you also transfer the right to use the Art, tied
        to the NFT, to the owner of that wallet. This means you no longer hold
        the license for PERSONAL USE or COMMERCIAL USE.
      </p>
      <br />
      <h2> ii. PERSONAL USE.</h2>
      <br />
      <p>
        Subject to your continued compliance with these Terms, Randy Al grants
        you a worldwide, royalty-free license to use, copy, and display the
        purchased Art, along with any extensions that you choose to create or
        use, solely for the following purposes:
      </p>
      <ol className={styles.list}>
        <li>for your own personal, non-commercial use;</li>
        <li>
          as part of a marketplace that permits the purchase and sale of your
          Randy Al asset, provided that the marketplace cryptographically
          verifies each Randy Al asset owner’s rights to display the Art; or
        </li>
        <li>
          (iii) as part of a third party website or application that permits the
          inclusion, involvement, or participation of your Randy Al asset,
          provided that the website/application cryptographically verifies each
          Randy Al asset owner’s rights to display the Art for their Randy Al
          asset to ensure that only the actual owner can display the Art.
        </li>
      </ol>
      <br />
      <h2>iii. COMMERCIAL USE.</h2>
      <br />
      <p>
        Subject to your continued compliance with these Terms, Randy Al grants
        you an unlimited, worldwide license to use, copy, and display the
        purchased Art for the purpose of creating derivative works based upon
        the purchased Randy Al asset (“Commercial Use”). Examples of such
        Commercial Use would e.g. be the use of the Art to produce and sell
        merchandise products (T-Shirts etc.) displaying copies of the Art. This
        could extend to but is not limited to
      </p>
      <ol className={styles.list}>
        <li>Selling merchandise products of your NFT art;</li>
        <li>Displaying copies of your NFT art;</li>
        <li>
          owning or operating a marketplace that permits the use and sale of
          Randy Al assets generally, provided that the marketplace
          cryptographically verifies each Randy Al asset owner’s rights to
          display the Art for their Randy Al asset to ensure that only the
          actual owner can display the Art;
        </li>
        <li>
          (iv) Creating art with the inclusion of your specific Randy Al asset.
        </li>
      </ol>
      <br />
      <h2>CHANGES, TERMINATION, AND REVOCATION</h2>
      <br />
      <p>
        Randy Al will announce publicly any changes to be made for the terms and
        conditions. You comply with the fact that these terms may change, your
        license may be revoked or terminated, at any point in time at Randy Al's
        discretion due to:
      </p>
      <ol className={styles.list}>
        <li>
          Breaching the terms and conditions of these terms and conditions.
        </li>
        <li>
          Misuse or misrepresent a Randy Al asset or other Randy Al assets not
          owned by yourself.
        </li>
        <li>{'Minting counterfeits relating to your Randy Al asset(s)'}</li>
        <li>
          Performing actions that harm, in any way, the Randy Al collections.
        </li>
      </ol>
    </main>
  );
}
