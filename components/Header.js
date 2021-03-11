import React from 'react';
import styles from '../styles/Header.module.css';

export default function Header() {
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
        >
          Contribute
        </a>
        <a
          href='https://github.com/aimhubio/aim#contents'
          target='_blank'
          rel='noreferrer noopener'
        >
          Docs
        </a>
        <a
          href='https://github.com/aimhubio/aim'
          target='_blank'
          rel='noreferrer noopener'
        >
          GitHub
        </a>
      </nav>
    </header>

  );
}
