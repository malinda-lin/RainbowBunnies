import React from 'react';
import { AppLoading } from 'expo';
import {
  StyleSheet, View, Text, TouchableOpacity, Image, Dimensions
} from 'react-native';
import {
  useFonts,
  DMSerifDisplay_400Regular,
} from '@expo-google-fonts/dm-serif-display';

// docs for buttons/tap gestures: https://reactnative.dev/docs/handling-touches#touchables

const { width, height } = Dimensions.get('window');

export default function Landing({ navigation, route }) {
  let [fontsLoaded] = useFonts({
    DMSerifDisplay_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.bkgImage}
        source={require('../../assets/images/landing.jpg')}
      />
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>Askin</Text>
        </View>
        <View style={styles.taglineContainer}>
          <Text style={styles.tagline}>Skincare is self care.</Text>
          <Text style={styles.description}>
            searchable database for few ingredients take our skin type and skin concern quiz!
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('OnboardingNavigator');
            }}
          >
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'space-evenly',
    paddingLeft: height / 16,
    paddingRight: height / 16,
    paddingBottom: height / 14,
    paddingTop: height / 14
  },
  logoContainer: {
    flex: 5
  },
  logo: {
    fontFamily: 'DMSerifDisplay_400Regular',
    color: '#EC6E55',
    fontSize: height / 16
  },
  taglineContainer: {
    flex: 2
  },
  tagline: {
    margin: 10,
    fontSize: 30
  },
  description: {
    fontSize: 16
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width,
  },
  button: {
    padding: width / 16,
    width: width - (width / 16) * 2,
    backgroundColor: '#EC6E55',
    alignItems: 'center',
    borderRadius: 12,
  },
  buttonText: {
    color: 'white',
    fontSize: 20
  },
  bkgImage: {
    flex: 1,
    // resizeMode: 'cover',
    // justifyContent: 'center',
    position: 'absolute',
    top: -400,
    height: height * 1.5,
    width: width * 1.5

  }
});
