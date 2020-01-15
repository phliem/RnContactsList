# React Native contact list


## Pre-requirements
Make sure that you laptop is setup according to the React Native docs
https://facebook.github.io/react-native/docs/getting-started

Dependencies for iOS: node, watchman, cocoapods, xcode
Dependencies for android: node, watchman, adoptopenjdk8, android studio


## Installation
1. Clone repo: `git clone git@github.com:phliem/RnContactsList.git`
2. Go the project folder: `cd RnContactsList`
3. Install all dependencies: `yarn install`
4. Linking all dependencies: `cd ios && pod install`


## Run the app
To run the app on iOS: `yarn run ios`
To run the app on android: `yarn run android`


## Testing
Using JEST (https://jestjs.io/) and ENZYME (https://airbnb.io/enzyme/)
To run unit test : `yarn run test`


## Other tools
Run Eslint check: `yarn run lint`
Run Flow check: `yarn run flow`
Run avatars filenames cleanup and generate avatars map : `yarn run format-img`


## Notes
I would do next: 
- Improve the scrolling effect to match the design. On a long scroll in the top list, the user details are not scrolling at the same time as the interaction. According to the design, both lists should animate at the same time. I would have a look at an event that gets fired continuously during the sliding animation with a throttle.
- Improve the overall design. At the moment the design is very basic, this could be really improved and also adding animation on top.
- Improve Android interactions (ie: by default the scrolling on the edge don't bounce back...)
- 'format-images' has been made only for avatars, but if we would other require other map of assets for a project, I would make it so that it scans the whole 'res' folder not only one specific folder. I could also extend it to check that the image contains also 3 versions (normal, @2x, @3x)