import styles from '../styles/Home.module.css';
import typography from '../styles/Typography.module.css';

import Head from 'next/head';
import React, { useState, useEffect, useRef } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import SegmentAnalytics from "../components/SegmentAnalytics.js";
import NewsletterSubscriptionForm from "../components/NewsletterSubscriptionForm.js";
import Header from "../components/Header";
import Footer from '../components/Footer';
import { trackEvent } from '../analytics';

const highlighterStyle = {
  ...atomDark,
  "pre[class*=\"language-\"]": {
    ...atomDark["pre[class*=\"language-\"]"],
    "borderRadius": "0em",
    "background": "#020202",
  },
  ":not(pre) > code[class*=\"language-\"]": {
    ...atomDark[":not(pre) > code[class*=\"language-\"]"],
    "borderRadius": "0em",
    "background": "#020202",
  },
};

export default function Home() {
  let [scrolled, setScrolled] = useState(false);
  let [sidebarOpened, setSidebarOpened] = useState(false);
  let [copied, setCopied] = useState(false);

  let copyRef = useRef(null);

  function handleScroll(evt) {
    setScrolled(window.scrollY > window.innerHeight / 2);
  }

  function copyToClipboard(text) {
    if (copyRef.current === null) {
      copyRef.current = document.createElement('input');
      copyRef.current.value = text;
      copyRef.current.style.position = 'fixed';
      copyRef.current.style.left = '-9999999px';
    }
    document.body.appendChild(copyRef.current);
    copyRef.current.select();
    copyRef.current.setSelectionRange(0, 99999)
    document.execCommand('copy');
    document.body.removeChild(copyRef.current);
    setCopied(true);
  }

  function onClickEventTracking(name) {
    trackEvent(`[Homepage] go to ${name}`);
  }

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 1000);
    }
  }, [copied]);

  return (
    <div>
      <SegmentAnalytics page='[Landing Page]' />

      <Head>
        <meta httpEquiv='Content-Type' content='text/html; charset=UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content='Aim logs your training runs, enables a beautiful UI to compare them and an API to query them programmatically' />
        <meta name='facebook-domain-verification' content='ebwbb96izw2ae0cwg0eza2lzmqhj0e' />

        <meta property='og:title' content='An open-source, self-hosted AI experiment tracking tool' />
        <meta property='og:description' content='Aim logs your training runs, enables a beautiful UI to compare them and an API to query them programmatically' />
        <meta property='og:url' content='https://aimstack.io' />
        <meta property='og:image' content='https://aimstack.io/aim-preview-v3.png' />
        <meta property='og:image:width' content='1920' />
        <meta property='og:image:height' content='905' />

        <meta name='twitter:title' content='An open-source, self-hosted AI experiment tracking tool' />
        <meta name='twitter:description' content='Aim logs your training runs, enables a beautiful UI to compare them and an API to query them programmatically' />
        <meta name='twitter:image' content='https://aimstack.io/aim-preview-v3.png' />

        <meta name='theme-color' content='#343434' />
        <title>AimStack - Dev tools for AI engineers</title>
        <link rel='icon' href='/favicon-v3.ico' />

        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap" rel="stylesheet" />
        <link href='https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap' rel='stylesheet' />
        <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet' />

        <link rel="stylesheet" href="https://sibforms.com/forms/end-form/build/sib-styles.css" />
      </Head>

      <Header />

      <div
        className={`${styles.backdrop} ${sidebarOpened ? styles.backdropVisible : ''}`}
        onClick={evt => setSidebarOpened(false)}
      />
      <div
        className={`${styles.backdrop} ${copied ? `${styles.backdropVisible} ${styles.copyBackdrop}` : ''}`}
      >
        <h2>Copied!</h2>
      </div>

      <main id="aim" className={styles.main}>
        <section className={`${styles.section} ${styles.Hero}`}>
          <div className={styles.container}>
            <div className={styles.HeroHeader}>
              <div className={styles.HeroHeaderTitle}>
                <div>
                  <div className={styles.HeroHeaderTitleRow}>
                    <h2 className={typography.TextLG}>
                      Aim
                    </h2>
                    <div className={styles.HeroHeaderGHStars}>
                      <iframe
                        className={styles.HeroHeaderGHStarsSmall}
                        src="https://ghbtns.com/github-btn.html?user=aimhubio&repo=aim&type=star&count=true&size=small"
                        frameBorder="0"
                        scrolling="0"
                        width="110"
                        height="20"
                        title="GitHub"
                      />
                      <iframe
                        className={styles.HeroHeaderGHStarsLarge}
                        src="https://ghbtns.com/github-btn.html?user=aimhubio&repo=aim&type=star&count=true&size=large"
                        frameBorder="0"
                        scrolling="0"
                        width="170"
                        height="30"
                        title="GitHub"
                      />
                    </div>
                  </div>
                  <h2 className={typography.TextLG}>
                    The open-source tool for ML experiment comparison
                  </h2>
                </div>
              </div>
              <div className={styles.HeroHeaderCTAs}>
                <h2 className={typography.TextLG}>
                  <a href='/#about'>
                    > Get started
                  </a>
                </h2>
                <h2 className={typography.TextLG}>
                  <a href='/#get-involved'>
                    > Get involved
                  </a>
                </h2>
              </div>
              <div className={styles.HeroHeaderImg}>
                <img alt='Aim' src='/aim-ui-v3.gif' draggable={false} />
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.section} ${styles.HeroFeaturesWrapper}`}>
          <div className={styles.container}>
            <div className={styles.HeroFeatures}>
              <div className={styles.HeroFeaturesItem}>
                <h2 className={typography.TextLG}>
                  Open-source
                  <br />
                  ---
                </h2>
                <p className={`${styles.HeroFeaturesItemDesc} ${typography.TextMD}`}>
                  Community-driven.
                  <br />
                  Self-hosted and full metadata access.
                </p>
              </div>
              <div className={styles.HeroFeaturesItem}>
                <h2 className={typography.TextLG}>
                  Explore & Compare
                  <br />
                  ---
                </h2>
                <p className={`${styles.HeroFeaturesItemDesc} ${typography.TextMD}`}>
                  Easily search, group and aggregate metrics by any hyperparameter.
                </p>
              </div>
              <div className={styles.HeroFeaturesItem}>
                <h2 className={typography.TextLG}>
                  Dashboard
                  <br />
                  ---
                </h2>
                <p className={`${styles.HeroFeaturesItemDesc} ${typography.TextMD}`}>
                  Activity view and full experiments dashboard for all experiments.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className={`${styles.section} ${styles.HowItWorks}`}>
          <div className={styles.container}>
            <div className={styles.HowItWorksBody}>
              <div className={styles.HowItWorksList}>
                <h2 className={typography.TextLG}>
                  How it works?
                </h2>
                <br />
                <br />
                <p className={`${typography.TextMD} ${styles.HowItWorksBullet}`}>
                  - Aim is a python package.
                  <br />
                  - Use it to track any dictionaries and metrics.
                  <br />
                  - Only two functions to integrate with your training code.
                  <br />
                  - Works with any python script and ML framework.
                  <br />
                  - Stores metadata logs locally.
                  <br />
                  - Comes with the most powerful experiment comparison UI.
                </p>
              </div>
              <div className={styles.HowItWorksCode}>
                <SyntaxHighlighter language='bash' style={highlighterStyle}>
                  pip3 install aim
                </SyntaxHighlighter>
                <SyntaxHighlighter language='python' style={Object.assign({}, highlighterStyle)}>
                  {
                    `from aim import Run
                    
run = Run()

# Save inputs, hparams or any other 'key: value' pairs
run['hparams'] = hyperparam_dict

for step in range(10):
  # Log metrics to visualize performance
  run.track(metric_value, name='metric_name', epoch=epoch_number)`
                  }
                </SyntaxHighlighter>
                <SyntaxHighlighter language='bash' style={highlighterStyle}>
                  aim up
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.section} ${styles.FeatureBlocks}`}>
          <div className={styles.container}>
            <div className={styles.FeatureBlocksGrid}>
              <div className={styles.FeatureBlocksContent}>
                <p className={`${typography.TextMD} ${styles.FeatureBlocksOverline}`}>
                  Features:
                </p>
                <div className={styles.FeatureBlock}>
                  <h2 className={typography.TextLG}>
                    Dashboard and Explore: Full Research context at hand
                  </h2>
                  <p className={typography.TextMD}>
                    Use the dashboard to see your activities, instantly search by clicking on activity slots, search by run/experiment.
                  </p>
                  <div className={styles.FeatureBlockDemo}>
                    <div className={styles.FeatureBlockDemoArea}>
                      <img className={styles.FeatureBlockDemoAsset} alt='Aim' src='/demo/runs-explorer.png' draggable={false} />
                    </div>
                  </div>
                  <p className={typography.TextMD}>
                    Use Explore to view groups of experiments, compare and play with the runs/metrics.
                  </p>
                  <div className={styles.FeatureBlockDemo}>
                    <div className={styles.FeatureBlockDemoArea}>
                      <img className={styles.FeatureBlockDemoAsset} alt='Aim' src='/demo/metrics-explorer.png' draggable={false} />
                    </div>
                  </div>
                  <p className={typography.TextMD}>
                    <strong>Explore is the most advanced open source AI experiment comparison tool available!</strong>
                  </p>
                </div>
                <div className={styles.FeatureBlock}>
                  <h2 className={typography.TextLG}>
                    Search, Group and Aggregate
                  </h2>
                  <p className={typography.TextMD}>
                    Search through everything you have tracked using the Aim pythonic query language. Super easy to use.
                  </p>
                  <p className={typography.TextMD}>
                    Group and Aggregate 1000s of metrics to quickly see the trends for hyperparameter sensitive runs.
                  </p>
                  <div className={styles.FeatureBlockDemo}>
                    <div className={styles.FeatureBlockDemoArea}>
                      <img className={styles.FeatureBlockDemoAsset} alt='Aim' src='/demo/search-group.png' draggable={false} />
                    </div>
                  </div>
                </div>
                <div className={styles.FeatureBlock}>
                  <h2 className={typography.TextLG}>
                    Use subplots to compare different metrics of the same runs
                  </h2>
                  <p className={typography.TextMD}>
                    Divide into subplots and monitor metrics from different perspectives.
                  </p>
                  <div className={styles.FeatureBlockDemo}>
                    <div className={styles.FeatureBlockDemoArea}>
                      <img className={styles.FeatureBlockDemoAsset} alt='Aim' src='/demo/metrics-subplots.png' draggable={false} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="get-involved" className={`${styles.section} ${styles.GetInvolved}`}>
          <div className={styles.container}>
            <div className={styles.GetInvolvedGrid}>
              <div className={styles.GetInvolvedContent}>
                <p className={`${typography.TextMD} ${styles.GetInvolvedOverline}`}>
                  Let's build Aim together
                </p>
                <p className={`${typography.TextMD} ${styles.GetInvolvedAbout}`}>
                  We need your help to constantly improve Aim for the community. If you are already using Aim or just getting started, join us to help build beautiful and effective open source tools for you.            </p>
                <br />
                <br />
                <h2 className={typography.TextLG}>
                  <a href='https://slack.aimstack.io' target='_blank' onClick={() => onClickEventTracking('slack')}>
                    > Join our Slack
                  </a>
                </h2>
                <h2 className={typography.TextLG}>
                  <a href='https://github.com/aimhubio/aim/issues' target='_blank' onClick={() => onClickEventTracking('GitHub issues')}>
                    > Get involved on GitHub
                  </a>
                </h2>

                <NewsletterSubscriptionForm />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  )
}
