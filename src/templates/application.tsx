import * as React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import Reset from '../components/reset';
import theme from '../theme';

interface Props {
  children: any,
}

const appTheme = {
  ...theme,
};

const ApplicationTemplate = ({ children }: Props) => (
  <ThemeProvider theme={ appTheme }>
    <div>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css" />
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet" />

        <title>NextJS Typescript Starter</title>
      </Head>
      <div>
        { children }
      </div>
      <Reset />
    </div>
  </ThemeProvider>
);

export default ApplicationTemplate;