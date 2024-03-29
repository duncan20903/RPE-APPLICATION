import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import React from 'react'

const { width } = Dimensions.get('window');
const buttonWidth = width * 0.4; 

export default function Home({ setSignedIn} ) {


  const guestLoginButton = () => {
    setSignedIn(true);
  };

  const getStartedButton = () => {
    
  };
  
    return (
      <View style={styles.container}>
        <View style={styles.bottomContainer}>
          <TouchableOpacity style={[styles.button,{ width: buttonWidth }, {backgroundColor: '#AEAEAE'}]} onPress={guestLoginButton}>
            <Text style={styles.buttonText}>Guest Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button,{ width: buttonWidth }, {backgroundColor:'#66AEC5'}]} onPress={getStartedButton}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: '#2B2D42',
    },
    bottomContainer: {
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      paddingBottom: 40,
    },
    button: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 5,
      marginVertical: 10,
    },
    buttonText: {
      color: '#ffffff', 
      fontWeight: 'bold',
      textAlign: 'center'
    },
   
  });
  
