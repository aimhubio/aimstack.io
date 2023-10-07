import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
import { getCssText } from '../styles';

const GA_MEASUREMENT_ID = 'G-G8YKCN2HLS';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initalProps = await Document.getInitialProps(ctx);

    return initalProps;
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />

          {/* Google tag (gtag.js) */}
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config','${GA_MEASUREMENT_ID}');
            `}
          </Script>
          {/* Google tag (gtag.js) */}

          {/* Google Tag Manager */}
          <Script
            id="google-tag-manager"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer',${GA_MEASUREMENT_ID});`,
            }}
          />
          {/* End Google Tag Manager */}
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* Google Tag Manager (noscript) */}
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GA_MEASUREMENT_ID}"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          />
          {/* End Google Tag Manager (noscript) */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
