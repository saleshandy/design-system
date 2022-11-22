import '!style-loader!css-loader!sass-loader!../src/assets/scss/design-system.scss';
import '!style-loader!css-loader!sass-loader!react-loading-skeleton/dist/skeleton.css';

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
