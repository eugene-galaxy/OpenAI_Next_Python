import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Lesson Planning Simplified."
          />
          <meta property="og:site_name" content="twitterbio.com" />
          <meta
            property="og:description"
            content="Lesson Planning Simplified."
          />
          <meta property="og:title" content="MagicPlan" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="MagicPlan" />
          <meta
            name="twitter:description"
            content="Lesson Planning Simplified."
          />
          <meta
            property="og:image"
            content="https://twitterbio.com/og-image.png"
          />
          <meta
            name="twitter:image"
            content="https://twitterbio.com/og-image.png"
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
