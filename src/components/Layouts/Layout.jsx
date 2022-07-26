import React from 'react';
import * as styles from './Layout.module.scss';
import './reset.css';
import { Helmet } from 'react-helmet';

export default function Layout({ children }) {
  return (
    <div className={styles.root}>
      <Helmet>
        <meta charSet='utf-8' />
        <title>PROSPECTORS</title>
      </Helmet>
      {children}
    </div>
  );
}
