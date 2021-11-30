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
        <a
          href='http://play.aimstack.io:10001/metrics?grouping=7pRrVvgN1DJa32JqNDmWLwYyX4KK3GAiJ4CqBcfURxEa4DSnDuLQSiJjdYhxVSpZUxBKvKjoh3h4Ub31zdP6ZoFqPgmjhEJMJ2sEGF9ULoVrBrp7SJm8HpuapSfWTTdpZAbb7fTbhNSrSPqKPd1gp7rEesFqXxyAsQkZ2pS4zqkcATRDJeMYwApi3rmYMdErE3UBQcY7siy8gWoaMEmszcVjqCK1uPmwZ1gf1i1G6E7CWDCF1b4Rffc9eTWjxfMdLX58hKVuH8UQRPQBeBRWDtXd2nU6hAGNuZTzajUoirF5wKtWhEpCB5t3x8Wzy7BLTDktAkNdfuApHaj4W9qrJE4RP1mEBcyDeFBP1USV8iSLpaAarFWETUrTMQ2B&chart=4ZBCjH6AAV9E4facsrdGUVcMURLzz7chBHTTxcvDLHrhXWz7DWBsBff53FqNgFye7onAV2kr9LSQ3jGLAFNj5KhayFJVTHUFDNT9AkrqTg6uSN6oLi1Zj8SiozRmztK7tfyX2fvDaQc18a2oqDzoUffFnQQA5PcvuvRKvgMjPoU9AhytxWGqMauZ7E2BwCBLZf5dWR476eBrrPjJZUFZ1sGqqGEdX8iHJRkUkFmPAAMUFvbufPqraNh47gABdCF8NT1doAY8d5qSGKXDGDewm1ZeeiCbNvogrS39sMhud4ef1wzDQqzm7BxVfpjkqUz6t84SmXX9mtJ22KR7hApJZfnx1qYp59ETRijyyGjDBsV6hXVBG4kbfgyh6i1vSaq2eGHWAnkXZYV9wdfR9ZeBsPyirkWuXdyehzApMonVCQDNwPR1QubBauzetAZkyBraLAeU5KZdUZwAsfpfCkK7mtobq89sn6S4gHCG1ch9YYDFQuaZmgR5SpJ1HLe2QUpLmedctqzkJ5Qij6smrkk23huuMFRDAXu6PbyL24UzAQZqxXAfV5toftb6JpN9yXxVbPaPTLfpAmwXL6BnhpwbkZiguTTef3675ppGmjxHLUzd12gc6F2SEPkeAPdQUwAaThtd6Sx364LRGuo4mtbryRm3bX8yf7kdDQfVh9GvT3ZQceHLbFf7dzPYE2idTbgTRGadzUbwk9LXUf52HnhvhE64XUTkBmL1LpxdLntcVLrNyycQMS2Jtm6o6b73ake3dEAQ7vS5WD2LHY5eDE98z3WjTt8CVFpopRk6yGURwWKPL4puvyv823NG54ffzYr8sim5uA8WbCT47snPDm831pvpGH8uQjz2NUdvfLXCdqE7kEfBNaMgwWqjPx6BoqHKhrRXnxMZN15KMi2rKm9WwAnhhBzg8fFqwRWbyY1qta8cAdP1xrgZMtxWQmfhPWuc7tXq1WvFJFoyVNzT2BS7yonyhF3XeAkou7SqnH7bvY7w9QyNyQopzSnWVr9idPKGN3CZZTqFESNstdGAetACJpcSJRS6Px5394cTKKpaXDhJ1W3ph4F5PG8tE4bQKGmMztcRupEHHmR9ASLbGxuRqaDqb7HwMxvYrLH2tStx9x6dj4Fogb9piFuMT6BgtcJABYhyp5giefh35HT7hesm7WoLdgadXmKzkDqrf7WGYiLK5hBSJFMsyibWSGSvbSEzYarXWY1LbEquDYHS3dYconQ3YuQDisRsHYuDF46cqjDaaUtgbTpe6a6HTuzpWPrmH8oUehDQtcmPAM2TS7tsmNyMRkSJdJiidCmro8sQmu6VsH8DUQtSVacJfb7Mcu7a5unGeYU2856mn4YxHF7UR66bkW57tNGCCyrPEQ1NAskhZMpEjKv3RQ5oMbxs4W9DbrggkHzuvXQMwZXKF7msH2DsxE9c9xuUMUDJBBKDpdSFirBgrdu1Sh6sJ18gDEBB4KC9tQeyyne1rymvFXSrv1zjCinn7RJgB8cqU5yZmM6B9JsFkUwTMHNTpYoeUFPsw3oYqgrcwxZ8YVuAA7CGtLeoEDZoHM8AasEL6Gg432YkfoQDkVtdCH5YbrJhehgVY4FLsbpVJtqerJzVtexELoB1bhcfjsXC29Ap4UP8KJ7QFDbusyeaKNXDwUvd3rjH42CXZURnmJpi5ZLz4v57Dar1zYpQ3CMfq3TXTYmRZWwvj62jm3eanndEJVSyPN11QcxXaHZvjyQzrqPWuncXQdoAKcGycQAbrPiZDPdkrTa7pyG839nAFgX6JD2bzJETi53DUXQKmdecxcqitqoTmnaFWWwRvxaZSUPrZbUV9TvBbyM3FFmq235cMCwS8JXS3od7iL2hoQRxnhsbwpk496aM6h3apfcdrYywGVrLPuMQv6mtz2hjec3JZqsDrQdo4FDFZ927zLYr8gY5qbS7zCfoD2yRx2nN2e4rGJV2dgCeCDV62uHgcYn3fdL9AvE4L1j3Akbjn4xaiSMH8Qx8sEmZHPe8G6do7J5K4CgrEaWht9pC5HfGDyevAjJaSuWqLo4cEDP86i16WzkcWvpPfAqX5CQkbQmJUhskBLj2TA4e29mL8RYwexTopD1JLn4Qpg633FuGejtThLka38kN1KZvKJEjnvNFwNLqxdaK42AywHbfDDvP9wjwfDCivd5nyLK7xvLCtJ3zpbCReLUUGhuo3UyCTPWvyJsPki9hVLjRgza3Z4DxwMeWFUfe5PrUZZKnJjw3cG1mB2VU4mKpU1nvFKX6TYYVwvWoFfLUjG9FcSrfojRt8uV4VdCkyYPRdNHfEJdSh5qereMuyokyxVAwE9HHCwLdzAgdrKoSeAu817AxcPfuLAuQ2Li68bQmPEUyNikXfpFkuk2SyhBbgpYNaJGiX1ayhfaXgituqUfiXRdPZqSWrYjNkwf1rvqM4AQZPzCbAkq9L6r3oA5ioayXNWc4tDSd7Gn93x13pAnawXK4L1yVq8HrRQU6farBrWsu5mzeyJUmjsjQWzRUGcFKUD1tb2FxaiQFANvDLr5fxGXqBYCNavJ44SBpEYiQw1dmJ1gdFnmmuZLYnKB2zASwyFvKGEf2AVcSWM76r7PEgA6F4YkHwEJuWxWeiATM1Jevq74dF9Z14gAGBu4QK3XftmsGUzbXW91Z3cwbAojabAgtoUC9TxFVvC5SmuLWhiqs6ZbzDRamDhrD9hWCeMAWccPdw12RA5oCP8wPEE2PC3JRum1ikzLRWrfsBEAZhvupQkBHuBn7RbVVNB1tyVfjWBTMMCsoMYHRd36jvNbekWGwn111Ej9N2a8HevsDvLqVpDqP7ubgWHQoiECxWDqdREVE3mj6Ya1bzuffifGNkPyEy3uWmEYpZPgVArXXLK2sN1BkfjYHfM1uMbRPfDXbg1bVhkV7cckhvqLYNN2aWmFqayGnmFo7jE3jfGUJZSje3Ba973wm32SSnJhfbFBFYECrf6JFwyPUdhynbRctws6y3fZGFU4DXn8dQmTKmQ3qWT6PBqX5dQ3n3HJx9kx6cjv&select=A6s6QXPYV4KMKzeyHf85R14vNQn3urHMP8cf7wEzn1iUv8vVCx9DawAVay8U843DVDoTK5D4gLrydSBGAVQCZY1AHhNRLmqE3VSmQDHweKkr4v7j9yhnBJA9SPApP5fReRBea9EJGDHnj4p3qL3iBsciuQghCC4PfysuRkRMDvBZgMDbvmM17eybKx1GEbpR6uKrME45B83SJcuSg2dwobYffWsKes7dH2TjYjCGXpr6QEi1FxN4qMJjN8zu7PjMzCi3UHL5tskM7wi3iHcf37D8mFHZLT6KS8wZ7NEEJaz4f8RGXwbEs1sDUH8bL5ERDvdXP85GquCAaMvvGfrDLz7mhTZhwTYfiXEfQb9ndmiUmNDie4fhkUijjk4hJ3HABxvQtKViGGhZzuiczAw5pMLomojbT8E3NFo4zyh3tVwHyJ3FyTD1A5UktZMom8WMBuq8TH4xgwpXL2J6ZMDHQs8AJdogAKWMPC9U5JBoW98Etc85YcUp9wu7BW4pVfi1JprFnuPYJGspBCbJXZtWKKW4GvLTbpTXCJ2CPs6ViqWHB4E4dg4SBGbE6XqknBNYU2oCrkMTWov95UgSFX5EvgHPw5p9BW8T91CZGseuhBfauA2LgqrDHXLkkSgp5e6Ai33BbfEamG6opTsHTTzj3xno74QEWKApvCVmwsW44XVVh7LbVfakvxeBp7eWytCCn1EP6CnP3skgBQygSYgzLAgHWo6XaAw'
          target='_blank'
          rel='noreferrer noopener'
          onClick={() => onClickEventTracking('demo')}
        >
          Demo
        </a>
      </nav>
    </header>

  );
}
