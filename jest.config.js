// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  // An array of directory names to be searched recursively up from the requiring module's location
  moduleDirectories: ['node_modules'],

  // The root directory that Jest should scan for tests and modules within
  rootDir: './',

  // A list of paths to directories that Jest should use to search for files in
  roots: ['<rootDir>/src/'],

  // A preset that is used as a base for Jest's configuration
  preset: 'react-native',

  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

  // An array of regexp pattern strings that are matched against all source file to not be transformed.
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|react-navigation|@react-native-community/masked-view)',
  ],
};
