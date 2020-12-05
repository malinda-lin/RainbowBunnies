import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Quiz from '../screens/quiz/Quiz';

const AppStack = createStackNavigator();

export default function QuizNavigator() {
  return (
    <AppStack.Navigator initialRouteName="Quiz" headerMode="none">
      <AppStack.Screen name="Quiz" component={Quiz} />
      {/* add quiz screens here */}
    </AppStack.Navigator>
  );
}

