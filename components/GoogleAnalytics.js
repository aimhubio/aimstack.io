import React from "react";
import Head from "next/head";

function GoogleAnalytics() {
  return (
    <>
      {
        process.env.NODE_ENV === "production" && process.browser ?
          <Head>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-GBY5V6LQGV"></script>
            <script
              async
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag("js", new Date());

              gtag("config", "G-GBY5V6LQGV");`
              }}
            />
          </Head> : null
      }
    </>
  );
}

export default GoogleAnalytics;