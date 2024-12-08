module.exports = {
    module: {
      rules: [
        {
          test: /\.js$/,
          include: /node_modules\/chart.js/,
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      ]
    }
  };
  