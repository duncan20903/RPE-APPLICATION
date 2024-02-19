import { View, Text, StyleSheet,ScrollView } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react'

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.settingsContainer}>
        <Text style={{fontSize: 20, color:'white'}}>Pick a Sport</Text>
        <Ionicons name="settings-sharp" size={32} color="white" />
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.sportsContainer}>
          <View style={styles.row}>
            <View style={styles.item}>
            <Text style={styles.itemText}>Swimming</Text>
            </View>
            <View style={styles.item}>
            <Text style={styles.itemText}>Running</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.item}>
            <Text style={styles.itemText}>Cycling</Text>
            </View>
            <View style={styles.item}>
            <Text style={styles.itemText}>Skiing</Text>

            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.item}>
            <Text style={styles.itemText}>Etc</Text>
            </View>
            <View style={styles.item}></View>
          </View>
          <View style={styles.row}>
            <View style={styles.item}></View>
            <View style={styles.item}></View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height:'100%',
    backgroundColor: '#1F283A',
    
  },
  settingsContainer: {
   
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent:'space-between',
    alignSelf:'center',
    width:'100%',
    marginTop: 100,
    padding: 20,
    // borderWidth: 1,
    // borderColor: 'red', 
    
    
  },
  sportsContainer: {
    flex: 1,
    alignItems: 'center',
    // borderWidth: 1, 
    // borderColor: 'white', 
    // borderRadius: 5, 
    paddingBottom: 100
   
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  item: {
    width: 150,
    height: 150,
    backgroundColor: 'skyblue',
    marginHorizontal: 10, 
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 15
  },
  itemText: {
    color: 'white',
    fontSize: 16, 
  },
  
});
