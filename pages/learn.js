import styles from '../styles/Learn.module.css';
import typography from '../styles/Typography.module.css';

import Head from 'next/head';
import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Learn() {
  return (
    <div className={styles.page}>
      <Head>
        <meta httpEquiv='Content-Type' content='text/html; charset=UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content='Aim - a super-easy way to record, search and compare AI experiments at scale' />

        <meta property='og:title' content='Compare 1000s of AI experiments at once' />
        <meta property='og:description' content='Aim - a super-easy way to record, search and compare AI experiments at scale' />
        <meta property='og:url' content='https://aimstack.io/learn' />
        <meta property='og:image' content='https://aimstack.io/aim-preview.png' />
        <meta property='og:image:width' content='1920' />
        <meta property='og:image:height' content='905' />

        <meta name='twitter:title' content='Compare 1000s of AI experiments at once' />
        <meta name='twitter:description' content='Aim - a super-easy way to record, search and compare AI experiments at scale' />
        <meta name='twitter:image' content='https://aimstack.io/aim-preview.png' />

        <meta name='theme-color' content='#343434' />
        <title>AimStack - Dev tools for AI engineers</title>
        <link rel='icon' href='/favicon.ico' />

        <script async src='https://www.googletagmanager.com/gtag/js?id=UA-108474435-1'/>

        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap" rel="stylesheet" />
        <link href='https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap' rel='stylesheet' />
        <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet' />

        <link rel="stylesheet" href="https://sibforms.com/forms/end-form/build/sib-styles.css"/>
      </Head>

      <Header />

      <div className={styles.main}>
        <section className={`${styles.section}`}>
          <div className={styles.container}>
            <div className={styles.title}>
              <h2 className={typography.TextLG}>
                Learn with Aim
              </h2>
            </div>
            <div className={styles.articlesGrid}>
              <div className={styles.articleItem}>
                <a href='https://medium.com/aimstack/how-to-tune-hyper-params-with-fixed-seeds-using-pytorch-lightning-and-aim-c61c73f75c7c' target='_blank'>
                  <div className={styles.articleItemCover} style={{ backgroundImage: 'url("/learn/covers/tune-params.png")' }} />
                  <p className={styles.articleItemMeta}>
                    Mar 11, 2021 | 4 min
                  </p>
                  <p className={`${styles.articleItemTitle}`}>
                    How to tune hyperparams with fixed seeds using PyTorch Lightning and Aim
                  </p>
                  <div className={styles.articleItemAuthor}>
                    <div className={styles.articleItemAuthorImg} style={{ backgroundImage: 'url("/learn/authors/gev.jpeg")' }} />
                    <p className={styles.articleItemAuthorName}>Gev Sogomonian</p>
                  </div>
                </a>
              </div>
              <div className={styles.articleItem}>
                <a href='https://medium.com/aimstack/aim-1-3-8-enhanced-table-and-advanced-group-coloring-b7f5b42586a5' target='_blank'>
                  <div className={styles.articleItemCover} style={{ backgroundImage: 'url("/learn/covers/aim-table.png")' }} />
                  <p className={styles.articleItemMeta}>
                    Mar 1, 2021 | 2 min
                  </p>
                  <p className={`${styles.articleItemTitle}`}>
                    Aim 1.3.8 — Enhanced Context Table and Advanced Group Coloring
                  </p>
                  <div className={styles.articleItemAuthor}>
                    <div className={styles.articleItemAuthorImg} style={{ backgroundImage: 'url("/learn/authors/gev.jpeg")' }} />
                    <p className={styles.articleItemAuthorName}>Gev Sogomonian</p>
                  </div>
                </a>
              </div>
              <div className={styles.articleItem}>
                <a href='https://medium.com/aimstack/aim-basics-using-context-and-subplots-to-compare-validation-and-test-metrics-f1a4d7e6b9ca' target='_blank'>
                  <div className={styles.articleItemCover} style={{ backgroundImage: 'url("/learn/covers/context.png")' }} />
                  <p className={styles.articleItemMeta}>
                    Feb 16, 2021 | 2 min
                  </p>
                  <p className={`${styles.articleItemTitle}`}>
                    Aim basics: using context and subplots to compare validation and test metrics
                  </p>
                  <div className={styles.articleItemAuthor}>
                    <div className={styles.articleItemAuthorImg} style={{ backgroundImage: 'url("/learn/authors/gev.jpeg")' }} />
                    <p className={styles.articleItemAuthorName}>Gev Sogomonian</p>
                  </div>
                </a>
              </div>
              <div className={styles.articleItem}>
                <a href='https://medium.com/aimstack/aim-1-3-5-activity-view-and-x-axis-alignment-8d82e7bcfcab' target='_blank'>
                  <div className={styles.articleItemCover} style={{ backgroundImage: 'url("/learn/covers/activity.png")' }} />
                  <p className={styles.articleItemMeta}>
                    Feb 5, 2021 | 2 min
                  </p>
                  <p className={`${styles.articleItemTitle}`}>
                    Aim 1.3.5 — Activity View and X-axis alignment
                  </p>
                  <div className={styles.articleItemAuthor}>
                    <div className={styles.articleItemAuthorImg} style={{ backgroundImage: 'url("/learn/authors/gev.jpeg")' }} />
                    <p className={styles.articleItemAuthorName}>Gev Sogomonian</p>
                  </div>
                </a>
              </div>
              <div className={styles.articleItem}>
                <a href='https://towardsdatascience.com/3-ways-aim-can-accelerate-your-ai-research-c03643ae6558' target='_blank'>
                  <div className={styles.articleItemCover} style={{ backgroundImage: 'url("/learn/covers/3-ways-aim.png")' }} />
                  <p className={styles.articleItemMeta}>
                    Dec 9, 2020 | 4 min
                  </p>
                  <p className={`${styles.articleItemTitle}`}>
                    3 Ways Aim Can Accelerate Your AI Research
                  </p>
                  <div className={styles.articleItemAuthor}>
                    <div className={styles.articleItemAuthorImg} style={{ backgroundImage: 'url("/learn/authors/gev.jpeg")' }} />
                    <p className={styles.articleItemAuthorName}>Gev Sogomonian</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}