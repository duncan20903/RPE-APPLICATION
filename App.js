import React from 'react';
import 'react-native-gesture-handler';
import { View, StyleSheet } from 'react-native';
import Navigation from './Navigation';
<<<<<<< HEAD


=======
import Welcome from './Screens/Welcome';
>>>>>>> 75e0f4f9b6062c4e92dd5cbddb79456c928fa8ed

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


