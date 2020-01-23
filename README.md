# React Native contact list


## Pre-requirements
Make sure that you laptop is setup according to the React Native docs
https://facebook.github.io/react-native/docs/getting-started

- Dependencies for iOS: node, watchman, cocoapods, xcode
- Dependencies for android: node, watchman, adoptopenjdk8, android studio


## Installation
1. Clone repo: `git clone git@github.com:phliem/RnContactsList.git`
2. Go the project folder: `cd RnContactsList`
3. Install all dependencies: `yarn install`
4. Linking all dependencies: `cd ios && pod install`


## Run the app
- To run the app on iOS: `yarn run ios`
- To run the app on android: `yarn run android`


## Testing
Using JEST (https://jestjs.io/) and ENZYME (https://airbnb.io/enzyme/)
- To run unit test : `yarn run test`


## Other tools
- Run Eslint check: `yarn run lint`
- Run Flow check: `yarn run flow`
- Run avatars filenames cleanup and generate avatars map : `yarn run format-img`
