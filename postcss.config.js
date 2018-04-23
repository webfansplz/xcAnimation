module.exports = {
  plugins: [
    require('autoprefixer')({
      // browsers: ['last 2 versions', 'iOS >= 7', 'Android >= 4.1']
      browsers: ['> 1%', 'last 2 versions', 'Firefox ESR'],
      cascade: false
    })
  ]
};
