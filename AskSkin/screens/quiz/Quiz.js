import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function Quiz({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Text>open Quiz.js to edit Quiz screen!!</Text>
      <Button
        title="Return to main page"
        onPress={() => {
          navigation.navigate('Onboarding');
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
