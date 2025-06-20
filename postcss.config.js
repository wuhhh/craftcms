export default {
  plugins: {
    'postcss-import': {},
    '@tailwindcss/postcss': {},
    'postcss-pxtorem': {
      rootValue: 16,
      unitPrecision: 5,
      propWhiteList: [
        '*',
        '!border',
        '!border-width',
        '!border-top-width',
        '!border-right-width',
        '!border-bottom-width',
        '!border-left-width',
        '!border-radius',
        '!border-top-left-radius',
        '!border-top-right-radius',
        '!border-bottom-right-radius',
        '!border-bottom-left-radius',
      ],
    },
    'autoprefixer': {}
  },
};
