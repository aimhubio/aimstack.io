import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script'
import { getCssText } from '../styles';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initalProps = await Document.getInitialProps(ctx);

    return initalProps;
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
          <link
            href='https://fonts.googleapis.com/css2?family=Inconsolata&family=Lora&family=Open+Sans:wght@400;500;600;700;800&display=swap'
            rel='stylesheet' />
          <Script
            src='https://identity.netlify.com/v1/netlify-identity-widget.js'
          />
          <style
            id='stitches'
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>
        <body>

        <Main />
        <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
