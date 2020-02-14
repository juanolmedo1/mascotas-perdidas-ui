module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@app': './app',
          '@assets': './app/assets',
          '@locales': './app/locales',
          '@store': './app/store',
          '@styles': './app/styles',
          '@home': './app/modules/home',
          '@core': './app/modules/core',
          '@login': './app/modules/login',
        },
      },
    ],
  ],
};
