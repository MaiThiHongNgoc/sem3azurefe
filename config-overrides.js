// config-overrides.js
module.exports = function override(config, env) {
    // Add custom Jest configuration here, if needed
    if (env === 'test') {
      config.module.rules.push({
        // Your custom Jest configuration, if any
      });
    }
    return config;
  };
  