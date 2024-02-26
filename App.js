import React from 'react';
import { View, StyleSheet } from 'react-native';
import Navigation from './Navigation';
import Welcome from './Screens/Welcome';

export default function App() {
 

  return (
    <View style={styles.container}>
    <Navigation>
    <Welcome />
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


