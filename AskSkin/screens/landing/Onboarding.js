import React from 'react';
import {
  StyleSheet, View, Text, Button,
} from 'react-native';

export default function Onboarding({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Button
        title="ingredients"
        onPress={() => {
          navigation.navigate('QuizNavigator');
        }}
      />
      <Button
        title="skin quiz"
        onPress={() => {
          navigation.navigate('QuizNavigator');
        }}
      />
      <Button
        title="skin concern"
        onPress={() => {
          navigation.navigate('QuizNavigator');
        }}
      />
      <Button
        title="back button for dev purposes"
        onPress={() => {
          navigation.navigate('Landing');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
