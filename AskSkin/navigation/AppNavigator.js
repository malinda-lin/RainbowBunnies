import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from '../screens/landing/Landing';

const AppStack = createStackNavigator();

function AppNavigator() {
  return (
    <AppStack.Navigator initialRouteName="Landing" headerMode="none">
      <AppStack.Screen name="Landing" component={Landing} />
    </AppStack.Navigator>
  );
}

export default AppNavigator;
