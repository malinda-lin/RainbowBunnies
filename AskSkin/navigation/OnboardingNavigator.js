import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Onboarding from '../screens/landing/Onboarding';
import QuizNavigator from './QuizNavigator';
// ***comment in the below lines when files are ready***
// import Ingredients from './screens/ingredients/Ingredients';
// import Ingredients from './screens/skinConcerns/SkinConcerns';

const AppStack = createStackNavigator();

export default function OnboardingNavigator() {
  return (
    <AppStack.Navigator initialRouteName="Onboarding" headerMode="none">
      <AppStack.Screen name="Onboarding" component={Onboarding} />

      {/* <AppStack.Screen name="Ingredients" component={Ingredients} /> */}

      <AppStack.Screen name="QuizNavigator" component={QuizNavigator} />

      {/* <AppStack.Screen name="SkinConcerns" component={SkinConcerns} /> */}

    </AppStack.Navigator>
  );
}
