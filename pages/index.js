import Head from 'next/head';
import React, { useState, useEffect, useRef } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import styles from '../styles/Home.module.css';

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
    <div className={styles.container}>
      <Head>
        <meta http-equiv='Content-Type' content='text/html; charset=UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content='' />

        <meta property='og:title' content='Super-easy way to record, search and compare AI experiments' />
        <meta property='og:description' content='' />
        <meta property='og:url' content='https://aimstack.io' />
        <meta property='og:image' content='' />

        <meta name='twitter:title' content='Super-easy way to record, search and compare AI experiments' />
        <meta name='twitter:description' content='' />
        <meta name='twitter:image' content=' ' />

        <meta name='theme-color' content='#142447' />
        <title>AimStack - Version Control and Development Environment for AI</title>
        <link rel='icon' href='/favicon.ico' />

        <script async src='https://www.googletagmanager.com/gtag/js?id=UA-108474435-1'></script>

        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap" rel="stylesheet" />
        <link href='https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap' rel='stylesheet' />
        <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet' />
      </Head>
      <header className={`${styles.header} ${scrolled ? styles.coloredHeader : ''}`}>
        <a href='/#hero'>
          <img alt='Aim logo' src='/aimhub.png' draggable={false} />
          <h2>Aim</h2>
        </a>
        <nav className={styles.nav}>
          <Nav />
        </nav>
        <button
          className={styles.menuButton}
          onClick={evt => setSidebarOpened(true)}
        >
          <i className='material-icons'>menu</i>
        </button>
      </header>
      <aside className={`${styles.aside} ${sidebarOpened ? styles.asideOpened : ''}`}>
        <Nav />
      </aside>
      <div
        className={`${styles.backdrop} ${sidebarOpened ? styles.backdropVisible : ''}`}
        onClick={evt => setSidebarOpened(false)}
      />
      <div
        className={`${styles.backdrop} ${copied ? `${styles.backdropVisible} ${styles.copyBackdrop}` : ''}`}
      >
        <h2>Copied!</h2>
      </div>
      <main className={styles.main}>
        <section id='hero' className={styles.section}>
          <div className={styles.moto}>
            <h1>
              A super-easy way to record, search and compare AI experiments
            </h1>
            <p>
              The most advanced AI dev tool for comparing 100s of experiments
            </p>
          </div>
          <div className={styles.logoContainer}>
            <img alt='Aim UI' src='/aim-ui.png' draggable={false} />
          </div>
          <div className={styles.polygon} />
        </section>
        <div className={styles.polygon} />
        <section id='about' className={styles.section}>
          <div className={styles.aimDescription}>
            <h5>what is aim?</h5>
            <h2>
              Aim makes it easy to search and compare 100s of AI experiments
            </h2>
            <p>
              If you are an NLP or Reinforcement Learning Researcher or just run lots of experiments, then Aim is the most appropriate tool for you.
              Spend more time on doing the math, analyzing your data pipeline.
              Aim makes it easy to search and compare 100s of AI experiments.
              For NLP, Reinforcement Learning and other experiment-heavy research
              projects, Aim will help you to manage your experiments with ease.
            </p>
            <ul role='list'>
              <li>Only two functions to integrate</li>
              <li>High level experiment dashboard</li>
              <li>Most advanced comparison features</li>
            </ul>
          </div>
          <div className={styles.example}>
            <SyntaxHighlighter language='python' style={prism}>
              pip instal aim
            </SyntaxHighlighter>
            <SyntaxHighlighter language='python' style={prism}>
              {
`import aim

# Save inputs, hparams or any other 'key: value' pairs
aim.set_params(hyperparam_dict, name='hparams')
# Passing name argument is optional

...
for step in range(10):
  # Log metrics to visualize performance
  aim.track(metric_value, name='metric_name', epoch=epoch_number)
...`
              }
            </SyntaxHighlighter>
            <SyntaxHighlighter language='python' style={prism}>
              aim up
            </SyntaxHighlighter>
          </div>
        </section>
        <hr className={styles.separator} />
        <section id='learn' className={styles.section}>
          <div className={styles.learn}>
            <h5>what can you do with aim?</h5>
            <h2>
              With Aim you can compare 100s of experiments in minutes
            </h2>
            <div className={styles.blog}>
              <a
                className={styles.card}
                href='https://www.youtube.com/watch?v=TeAkyRIMxx4'
                target='_blank'
                rel='noreferrer noopener'
              >
                <img alt='Aim video tutorial 1' src='/aim-vid-1.jpg' draggable={false}  />
                <div className={styles.playButton} />
                <p>
                  Sep 21, 2020 <span>•</span> 2:38 Min
                </p>
                <h3>How to use Aim to compare 100s of experiments in minutes</h3>
                {/* <a
                  href='https://www.youtube.com/channel/UCDNWviOImIlaN5cdN2ob7bA'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  <img alt='Aim logo' src='/aimhub-icon.png' draggable={false}  />
                  Aim
                </a> */}
              </a>
              <a 
                className={styles.card}
                href='https://www.youtube.com/watch?v=s1dLlqik3j0'
                target='_blank'
                rel='noreferrer noopener'
              >
                <img alt='Aim video tutorial 2' src='/aim-vid-2.jpg' draggable={false}  />
                <div className={styles.playButton} />
                <p>
                  Dec 1, 2020 <span>•</span> 2:31 Min
                </p>
                <h3>Analyzing 60+ experiments using Parallel Coordinates in Aim</h3>
                {/* <a
                  href='https://www.youtube.com/channel/UCDNWviOImIlaN5cdN2ob7bA'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  <img alt='' src='/aimhub-icon.png' draggable={false}  />
                  Aim
                </a> */}
              </a>
              <a
                className={styles.card}
                href='https://gevorg-s.medium.com/launching-aim-an-open-ai-development-environment-b0b69d5b8ff2'
                target='_blank'
                rel='noreferrer noopener'
              >
                <img alt='Aim blog post' src='/aim-blog-post-1.png' draggable={false} />
                <p>
                  Jun 24, 2020 <span>•</span> 3 Min Read
                </p>
                <h3>Launching Aim — an open AI development environment</h3>
              </a>
            </div>
          </div>
        </section>
        <hr className={styles.separator} />
        <section id='slack' className={styles.section}>
          <div>
            <h5>let's connect</h5>
            <h2>
              Join Aim community on Slack
            </h2>
            <p>
              Our growing slack community is a great environment for AI researchers to hang out and share their projects with each other. All things AI.
              Also ask your #questions, share your #ideas and #jokes with the amazing Aim community.
            </p>
            <a
              className={styles.slackButton}
              href='https://join.slack.com/t/aimstack/shared_invite/zt-jhlp5og5-jw5TnkWBfjVrrGXLsdMOBw'
              target='_blank'
              rel='noreferrer noopener'
            >
              Join our Slack
            </a>
          </div>
          <div className={styles.logos}>
            <img alt='Slack logo' src='/slack.svg' draggable={false} />
            <h2>+</h2>
            <img alt='Aim logo' src='/aimhub-icon.png' draggable={false} />
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <img alt='Aim logo' src='/aimhub.png' draggable={false} />
        © {new Date().getFullYear()}, AimHub
        <div className={styles.socialMedia}>
          <a
            href='https://twitter.com/aimstackio'
            target='_blank'
            rel='noreferrer noopener'
          >
            <svg style={{ width: 24, height: 24 }} viewBox='0 0 24 24'>
              <path fill='currentColor' d='M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z' />
            </svg>
          </a>
          <a
            href='https://www.facebook.com/aimhubio'
            target='_blank'
            rel='noreferrer noopener'
          >
            <svg style={{ width: 24, height: 24 }} viewBox='0 0 24 24'>
              <path fill='currentColor' d='M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z' />
            </svg>
          </a>
          <a
            href='https://www.linkedin.com/company/aimhubio'
            target='_blank'
            rel='noreferrer noopener'
          >
            <svg style={{ width: 24, height: 24 }} viewBox='0 0 24 24'>
              <path fill='currentColor' d='M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z' />
            </svg>
          </a>
        </div>
      </footer>
    </div>
  )
}

function Nav() {
  return (
    <>
      <a href='/#about'>
        about
      </a>
      <a href='/#learn'>
        learn
      </a>
      <a
        href='https://github.com/aimhubio/aim/wiki/contributing'
        target='_blank'
        rel='noreferrer noopener'
      >
        contribute
      </a>
      <a
        href='https://github.com/aimhubio/aim#contents'
        target='_blank'
        rel='noreferrer noopener'
      >
        docs
      </a>
      <a
        href='https://github.com/aimhubio/aim'
        target='_blank'
        rel='noreferrer noopener'
      >
        github
      </a>
    </>
  );
}
