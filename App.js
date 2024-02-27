import React from 'react';
import 'react-native-gesture-handler';
import { View, StyleSheet } from 'react-native';
import Navigation from './Navigation';



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


