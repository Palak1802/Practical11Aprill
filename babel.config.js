module.exports = {
  presets: ['module:@react-native/babel-preset'],
  overrides: [
    {plugins: [['@babel/plugin-transform-private-methods', {loose: true}]]},
  ],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        extensions: [
          '.ios.js',
          '.android.js',
          '.ios.jsx',
          '.android.jsx',
          '.js',
          '.jsx',
          '.json',
          '.ts',
          '.tsx',
          '.style.ts',
        ],
        alias: {
          '@imageIndex': './src/assets/imageIndex',
          '@componentIndex': './src/components copy/componentIndex',
          '@hooks': './src/hooks',
          '@navigation': './src/navigation',
          '@screenName': './src/navigation/screenName.ts',
          '@screens': './src/screens',
          '@redux': './src/services/redux',
          '@api': './src/services/api',
          '@theme': './src/theme',
        },
      },
    ],
  ],
};
