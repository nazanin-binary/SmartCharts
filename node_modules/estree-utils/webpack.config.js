module.exports = {

  devtool: 'eval',
  debug: true,
  target: 'node',

  output: {
    filename: './.tmp/bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loaders: ['babel', 'esprima-pretty?-print,+write,+export']
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
  }
}
