const path = require('node:path');

/** @type {import('jest').Config} */
const config = {
  preset: 'jest-expo',
  setupFilesAfterEnv: [path.join(__dirname, 'setup-testing.js')],
  transformIgnorePatterns: [
    // biome-ignore lint/nursery/noSecrets: is just only a regex for files
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)',
  ],
  moduleDirectories: ['node_modules', '<rootDir>'],
};

module.exports = config;
