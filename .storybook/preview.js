import '!style-loader!css-loader!sass-loader!../src/assets/scss/design-system.scss';

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
