import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';

import Home from "./Screens/Home";
import { StyleSheet} from 'react-native';


const Tab =createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel:false,
  headerShown:false,
  tabBarStyle:{
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    background: "#fff"
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen 
          name="Graphs" 
          component={Home} 
          options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={styles.container}> 
                  <Text style={{fontSize: 12, color: "#16247d"}}>GRAPHS</Text>
            </View>
              )
            }
          }}
          />
          <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={styles.container}> 
                  <Text style={{fontSize: 12, color: "#16247d"}}>HOME</Text>
            </View>
              )
            }
          }}
          />
          <Tab.Screen 
          name="Settings" 
          component={Home} 
          options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={styles.container}> 
                  <Text style={{fontSize: 12, color: "#16247d"}}>SETTINGS</Text>
            </View>
              )
            }
          }}
          />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
