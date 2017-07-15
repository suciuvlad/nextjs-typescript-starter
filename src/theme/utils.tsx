import { baseFontSize } from './constants';

const em = (value: string, context: string = baseFontSize): string => {
  const compute = parseFloat(value) / parseFloat(context);
  return `${ compute }em`;
};

export default {
  em,
};