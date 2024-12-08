module.exports = function override(config, env) {
    // Thêm rule để xử lý tệp JavaScript trong `chart.js` với Babel
    config.module.rules.push({
      test: /\.m?js$/,
      exclude: /(node_modules\/(?!chart.js))/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
    });
    return config;
  };
  