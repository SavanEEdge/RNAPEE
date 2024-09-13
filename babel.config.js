module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
        root: ['.'],
        alias: {
          '@src': './src',
        },
      },
    ],
  ],
};
