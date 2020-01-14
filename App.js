import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Components
import ContactsScreen from './src/components/ContactsScreen';

// Constants & Services
import COLORS from './src/res/colors';
import TYPOGRAPHY from './src/res/typography';

const AppNavigator = createStackNavigator(
  {
    Contacts: ContactsScreen,
  },
  {
    initialRouteName: 'Contacts',
    defaultNavigationOptions: {
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: COLORS.backgroundHead,
      },
      headerTitleStyle: TYPOGRAPHY.navigation,
    },
  },
);

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  return <AppContainer />;
};

export default App;
