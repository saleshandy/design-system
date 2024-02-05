module.exports = {
  stories: [
    '../src/**/*.stories.@(mdx)',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-controls',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/preset-scss',
    'storybook-addon-sass-postcss',
    'storybook-addon-designs',
    '@storybook/addon-mdx-gfm'
  ],

  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },

  docs: {
    autodocs: true
  }
};
