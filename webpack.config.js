const path = require('path');

module.exports = {
  entry: './src/index.js', // Your main JavaScript file
  output: {
    path: path.resolve(__dirname, 'dist'), // Output folder
    filename: 'bundle.js', // Bundled file name
  },
  mode: 'development',
  devServer: {
    static: './dist', 
    open: true, 
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Single CSS rule
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i, // For images
        type: 'asset/resource',
      },
    ],
  },
};
