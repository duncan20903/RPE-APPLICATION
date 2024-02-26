import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import Navigation from './Navigation';
import Welcome from './Screens/Welcome';
import InSport from "./Screens/InSport"

const Stack = createStackNavigator()

export default function App() {
 

  return (
    <View style={styles.container}>
    <Navigation>
    
    </Navigation>

    
    </View>
  );
}







const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F283A',
  },
});


