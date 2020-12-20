import React from 'react';
import {
  StyleSheet, View, Text,TouchableOpacity
} from 'react-native';

export default function Onboarding({ navigation, route }) {
  return (
  <View style={styles.container}>
    <View style={styles.titileContainer} >
      <Text style={styles.titleline}>What Would you like to do?</Text>
    </View>
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={style.button}
        onPress={() => {
          navigation.navigate('QuizNavigator');
        }}
        >
        <Text style={styles.buttonText}>Learn ingredients I'm curious about</Text>  
      </TouchableOpacity>  
      <TouchableOpacity
        style={style.button}
        onPress={() => {
          navigation.navigate('QuizNavigator');
        }}
        >
        <Text style={styles.buttonText}>Take the skin quiz to learn how to nourish</Text>  
      </TouchableOpacity>  
      <TouchableOpacity
        style={style.button}
        onPress={() => {
          navigation.navigate('SkinConcerns');
        }}
        >
        <Text style={styles.buttonText}>Search per Skin concern</Text>  
      </TouchableOpacity>  
    
    </View>

  </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF3EF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titileContainer: {
    flex: 10
  },

  titleline: {
    fontFamily:'Roboto',
    color: '000000',
    fontSize: 28
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#878585',

  },
  button: {
    padding: width / 16,
    width: width - (width / 16) * 2,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    marginTop: 24
  },
  buttonText: {
    color: 'black',
    fontSize: 16
  }


});
