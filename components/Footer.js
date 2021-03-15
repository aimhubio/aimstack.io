import styles from '../styles/Footer.module.css';
import typography from '../styles/Typography.module.css';
import React from 'react';

export default function Footer() {
  return (
    <footer className={`${styles.section} ${styles.footer}`}>
      <div className={styles.container}>
        <p className={typography.TextMD}>
          {/*<img alt='Aim logo' src='/aimhub.png' draggable={false} />*/}
          © AimStack, {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}