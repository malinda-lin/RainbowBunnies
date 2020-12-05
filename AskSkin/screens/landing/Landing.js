import React from 'react';
import {
  StyleSheet, View, Text, TouchableWithoutFeedback,
} from 'react-native';

// docs for buttons/tap gestures: https://reactnative.dev/docs/handling-touches#touchables

export default function Landing({ navigation, route }) {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate('OnboardingNavigator');
        }}
      >
        <View>
          <Text>Skincare is so ...</Text>
          <Text>Tap to start</Text>
        </View>
      </TouchableWithoutFeedback>
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
