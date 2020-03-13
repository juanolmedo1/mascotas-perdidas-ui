module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@app': './app',
          '@assets': './app/assets',
          '@core': './app/modules/core',
          '@entities': './app/entities',
          '@home': './app/modules/home',
          '@likes': './app/modules/likes',
          '@locales': './app/locales',
          '@login': './app/modules/login',
          '@notifications': './app/modules/notifications',
          '@profile': './app/modules/profile',
          '@store': './app/store',
          '@styles': './app/styles',
          '@upload': './app/modules/upload'
        }
      }
    ]
  ]
};
