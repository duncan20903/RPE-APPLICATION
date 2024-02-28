import { View, TouchableOpacity, Text, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import React from 'react'

const { width } = Dimensions.get('window');
const buttonWidth = width * 0.4; 

export default function WeightPicker({route}) {
  const { Gender } = route.params;

  
  
    return (
      <ImageBackground source={{ uri: 'https://images.unsplash.com/photo-1541252260730-0412e8e2108e?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} style={styles.backgroundImage}> 
      <View style={styles.container}>
        <Text>{Gender}</Text>
        <View style={styles.bottomContainer}>
          <TouchableOpacity style={[styles.button,{ width: buttonWidth }, {backgroundColor: '#AEAEAE'}]} >
            <Text style={styles.buttonText}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button,{ width: buttonWidth }, {backgroundColor:'#66AEC5'}]} >
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ImageBackground>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: 'rgba(43, 45, 66, 0.7)'
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
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover', // or 'stretch' or 'contain'
    },
  
   
  });