import React from "react";
import styles from "../styles/Header.module.css";

export default function Header() {
  function onClickEventTracking(name) {
    trackEvent(`[Header] go to ${name}`);
  }
  return (
    <header className={`${styles.header} ${styles.headerShadow}`}>
      <nav className={styles.headerNav}>
        <a href="/#aim">Aim</a>
        <a href="/#about">About</a>
        <a href="/learn" onClick={() => onClickEventTracking("learn page")}>
          Learn
        </a>
        <a
          href="https://github.com/aimhubio/aim/wiki/contributing"
          target="_blank"
          rel="noreferrer noopener"
          onClick={() => onClickEventTracking("github contribute")}
        >
          Contribute
        </a>
        <a
          href="https://github.com/aimhubio/aim#contents"
          target="_blank"
          rel="noreferrer noopener"
          onClick={() => onClickEventTracking("github docs")}
        >
          Docs
        </a>
        <a
          href="https://github.com/aimhubio/aim"
          target="_blank"
          rel="noreferrer noopener"
          onClick={() => onClickEventTracking("github")}
        >
          GitHub
        </a>
      </nav>
    </header>
  );
}
