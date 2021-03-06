import { goldenRatio, baseFontSize } from './constants';

const baseLineHeight = goldenRatio;

const lineHeight = `${parseFloat(baseFontSize) * goldenRatio}px`;

const scale = {
  xxxs: '14px',
  xxs: '16px',
  xs: '20px',
  sm: '26px',
  md: '33px',
  lg: '41px',
  xl: '51px',
};

const spacing = {
  xxs: '6px',
  xs: '12px',
  sm: '16px',
  md: '33px',
  lg: '41px',
  xl: '53px',
  xxl: '68px',
};

const columns = 16;
const columnWidth = 48;
const gutterWidth = 30;
const siteWidth = (columns * columnWidth) + (gutterWidth * (columns - 1));

const grid = {
  columns,
  columnWidth,
  gutterWidth,
  siteWidth,
};

export default {
  baseFontSize,
  baseLineHeight,
  lineHeight,
  scale,
  spacing,
  grid,
};