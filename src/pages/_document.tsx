import * as React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  public static getInitialProps ({ renderPage }: any) {
    const { html, head, errorHtml, chunks } = renderPage();
    const sheet = new ServerStyleSheet();
    const main = sheet.collectStyles(<Main />);
    const styleTags = sheet.getStyleElement();
    return { html, head, errorHtml, chunks, main, styleTags };
  }

  public render () {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          { this.props.styleTags }
        </Head>
        <body>
          { this.props.customValue }
          { this.props.main }
          <NextScript />
        </body>
      </html>
    );
  }
}