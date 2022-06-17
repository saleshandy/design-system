const replace = require('@rollup/plugin-replace');
const scss = require('rollup-plugin-scss');

module.exports = {
  rollup(config, options) {
    config.plugins.push(scss());

    config.plugins = config.plugins.map((p) =>
      p.name === 'replace'
        ? replace({
            'process.env.NODE_ENV': JSON.stringify(options.env),
            preventAssignment: true,
          })
        : p
    );

    return config;
  },
};
