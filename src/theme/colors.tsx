import * as tinycolor from 'tinycolor2';

const colors = {
  // Brand
  purple: '#6B2CA0',
  darkPurple: '#211037',

  green: '#34C475',
  darkGreen: '#299c5d',

  // Gray
  black: '#273A5B',
  lightBlack: '#697387',

  snow: '#e0e1e2',
  darkSnow: tinycolor('#e0e1e2').darken(10).toString(),
  extraDarkSnow: tinycolor('#e0e1e2').darken(20).toString(),

  smoke: '#DFE6ED',
  darkSmoke: tinycolor('#DFE6ED').darken(10).toString(),
  extraDarkSmoke: tinycolor('#DFE6ED').darken(20).toString(),

  // UI
  notification: '#1FB6FF',
  positive: '#13CE66',
  negative: '#FF4949',
  warning: '#FFC82C',
};

export default colors;