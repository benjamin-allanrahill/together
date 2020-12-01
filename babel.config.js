module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./tests/'],
          '@components': './src/components',
          '@atoms': './src/components/atoms',
          '@oranisms': './src/components/organisms',
          '@molecules': './src/components/molecules',
          '@styles': './src/styles',
        },
      },
    ],
  ],
};
