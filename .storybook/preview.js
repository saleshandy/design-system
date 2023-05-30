import '!style-loader!css-loader!sass-loader!../src/assets/scss/design-system.scss';
import '!style-loader!css-loader!sass-loader!../src/stories/scss/index.stories.scss';
import '!style-loader!css-loader!sass-loader!../node_modules/react-loading-skeleton/dist/skeleton.css';
import '!style-loader!css-loader!sass-loader!../node_modules/react-responsive-carousel/lib/styles/carousel.min.css';

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
