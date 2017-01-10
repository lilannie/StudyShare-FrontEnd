module.exports = {
  entry: [
      './app/router.js'
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
        Main: 'app/components/Main.js',
        Footer: 'app/components/common/Footer.js',
        Header: 'app/components/common/Header.js',
        Sidebar: 'app/components/common/Sidebar.js',
        Index: 'app/components/Index.js',
        User: 'app/components/user/User.js',
        Subject: 'app/components/subject/Subject.js',


    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',

        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
