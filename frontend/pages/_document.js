import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const prefix = this.props.__NEXT_DATA__.assetPrefix || "";
    return (
      <Html lang="es">
        <Head>
          <link rel="stylesheet" href={`${prefix}/css/globals.css`} />
          <link rel="stylesheet" href={`${prefix}/css/nprogress.css`} />
          <link rel="shortcut icon" href={`${prefix}/favicon.ico`} />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap"
            rel="stylesheet"
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
