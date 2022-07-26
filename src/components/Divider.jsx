import React from 'react';
import * as styles from './Divider.module.scss';

export default function Divider({ text, symbol }) {
  const repeatedText = () => {
    const repeatText = `${text} ${symbol} `;
    const repeatedArray = Array(20).fill(repeatText);
    return repeatedArray.map((mapText, i) => {
      // } else {
      return (
        <span key={i} className={styles.text}>
          {mapText}
        </span>
      );
      // }
    });
  };

  return <div className={styles.root}>{repeatedText()}</div>;
}
