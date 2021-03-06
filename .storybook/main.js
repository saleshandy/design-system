module.exports = {
  stories: [
    '../stories/welcome.stories.tsx',
    '../stories/**/*.stories.@(ts|tsx|js|jsx)',
  ],
  addons: [
    '@storybook/addon-controls',
    '@storybook/addon-essentials',
    '@storybook/preset-scss',
    '@storybook/addon-a11y',
  ],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  },
};
