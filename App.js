import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Components
import ContactsScreen from './src/components/ContactsScreen';

const AppNavigator = createStackNavigator(
  {
    Contacts: ContactsScreen,
  },
  {
    initialRouteName: 'Contacts',
  },
);

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  return <AppContainer />;
};

export default App;
