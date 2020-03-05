module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@assets': './app/assets',
          '@locales': './app/locales',
          '@store': './app/store',
          '@styles': './app/styles',
          '@home': './app/modules/home',
          '@core': './app/modules/core',
          '@login': './app/modules/login',
          '@profile': './app/modules/profile',
          '@upload': './app/modules/upload',
          '@likes': './app/modules/likes',
          '@notifications': './app/modules/notifications',
          '@app': './app'
        }
      }
    ]
  ]
};
