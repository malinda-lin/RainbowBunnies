import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Landing({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>open landing.js to edit landing screen</Text>
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
