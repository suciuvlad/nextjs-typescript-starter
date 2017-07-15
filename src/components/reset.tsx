import { injectGlobal } from 'styled-components';
import theme from '../theme';

export default () => {
  injectGlobal`
    html {
      box-sizing: border-box;
    }

    * {
      &,
      &:before,
      &:after {
        box-sizing: inherit;
      }
    }

    a {
      text-decoration: none;
      color: ${ theme.colors.lightBlack };

      &:hover {
        color: ${ theme.colors.black };
      }
    }

    p {
      margin: 0;
    }

    body {
      margin: 0;
      -webkit-font-smoothing: antialiased;
      color: ${ theme.colors.lightBlack };
      font-size: ${ theme.utils.em(theme.sizes.baseFontSize) };
      font-family: "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    body, p {
      line-height: ${ theme.utils.em(theme.sizes.lineHeight) };
    }

    p {
      margin-bottom: ${ theme.utils.em(theme.sizes.lineHeight) };
    }

    img, embed, object, video {
      max-width: 100%;
      height: inherit;
      _width: 100%;
    }

    h1, h2, h3, h4, h5, h6 {
      line-height: 1.2;
      text-rendering: optimizelegibility;
      margin: 0;
      color: ${ theme.colors.black };
    }

    ul, ol {
      padding-left: 0;
    }

    h1 {
      font-size: ${ theme.utils.em(theme.sizes.scale.xl) };
      margin-bottom: ${ theme.utils.em(theme.sizes.lineHeight, theme.sizes.scale.xl) };
    }

    h2 {
      font-size: ${ theme.utils.em(theme.sizes.scale.lg) };
      margin-bottom: ${ theme.utils.em(theme.sizes.lineHeight, theme.sizes.scale.lg) };
    }

    h3 {
      font-size: ${ theme.utils.em(theme.sizes.scale.md) };
      margin-bottom: ${ theme.utils.em(theme.sizes.lineHeight, theme.sizes.scale.md) };
    }

    h4 {
      font-size: ${ theme.utils.em(theme.sizes.scale.sm) };
      margin-bottom: ${ theme.utils.em(theme.sizes.lineHeight, theme.sizes.scale.sm) };
    }

    h5 {
      font-size: ${ theme.utils.em(theme.sizes.scale.xs) };
      margin-bottom: ${ theme.utils.em(theme.sizes.lineHeight, theme.sizes.scale.xs) };
    }

    h6 {
      font-size: ${ theme.utils.em(theme.sizes.scale.xxs) };
      margin-bottom: ${ theme.utils.em(theme.sizes.lineHeight, theme.sizes.scale.xxs) };
    }
  `;
  return null;
};
