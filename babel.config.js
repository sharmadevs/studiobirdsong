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
        "@components": "./src/components",
        "@features": "./src/features",
        "@redux": "./src/redux",
        "@navigation": "./src/navigation",
        "@libs":"./src/libs",
        "@utils":"./src/utils"
      }
    }
  ],['react-native-reanimated/plugin']
  ]
};
