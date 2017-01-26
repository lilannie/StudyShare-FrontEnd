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
        Animation: 'app/components/animation/Animation.js',
        Browse: 'app/components/browse/Browse.js',
        Group: 'app/components/group/Group.js',
        Deck: 'app/components/deck/Deck.js',
        Friend: 'app/components/friend/Friend.js',
        Note: 'app/components/note/Note.js',
        Notebook: 'app/components/notebook/Notebook.js',
        Notecard: 'app/components/notecard/Notecard.js',
        Subject: 'app/components/subject/Subject.js',
        User: 'app/components/user/User.js',
        Login: 'app/components/auth/Login.js',
        Signup: 'app/components/auth/Signup.js',
        ContentHeader: 'app/components/common/content/ContentHeader.js',
        ContentSidebar: 'app/components/common/content/ContentSidebar.js',
        ContentBody: 'app/components/common/content/ContentBody.js',
        CardTemplate: 'app/components/common/content/CardTemplate.js',
        CardHeader: 'app/components/common/content/CardHeader.js',
        CardActions: 'app/components/common/content/CardActions.js',
        RichEditor: 'app/components/common/editor/containers/RichEditor.js',
        Background: 'public/images/app/background.jpg'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',

        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      },
        {
            test: /\.scss$/,
            loaders: ['style-loader', 'css-loader', 'sass-loader']
        }
    ]
  }
};


