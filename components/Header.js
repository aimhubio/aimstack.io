import React from 'react';
import { trackEvent } from '../analytics';
import styles from '../styles/Header.module.css';

export default function Header() {

  function onClickEventTracking(name) {
    trackEvent(`[Header] go to ${name}`);
  }

  return (
    <header className={`${styles.header} ${styles.headerShadow}`}>
      <nav className={styles.headerNav}>
        <a href='/#aim'>
          Aim
        </a>
        <a href='/#about'>
          About
        </a>
        <a href='/learn'>
          Learn
        </a>
        <a
          href='https://github.com/aimhubio/aim/wiki/contributing'
          target='_blank'
          rel='noreferrer noopener'
          onClick={() => onClickEventTracking('contribute')}
        >
          Contribute
        </a>
        <a
          href='https://aimstack.readthedocs.io/en/stable/'
          target='_blank'
          rel='noreferrer noopener'
          onClick={() => onClickEventTracking('docs')}
        >
          Docs
        </a>
        <a
          href='https://github.com/aimhubio/aim'
          target='_blank'
          rel='noreferrer noopener'
          onClick={() => onClickEventTracking('GitHub')}
        >
          GitHub
        </a>
      </nav>
    </header>

  );
}
