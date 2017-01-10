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
        Index: 'app/components/Index.js',
        Footer: 'app/components/common/Footer.js',
        Header: 'app/components/common/Header.js',
        Sidebar: 'app/components/common/Sidebar.js',
        Browse: 'app/components/browse/Browse.js',
        Deck: 'app/components/deck/Deck.js',
        Note: 'app/components/note/Note.js',
        Notebook: 'app/components/notebook/Notebook.js',
        Notecard: 'app/components/notecard/Notecard.js',
        Subject: 'app/components/subject/Subject.js',
        User: 'app/components/user/User.js',
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
