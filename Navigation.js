import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Home from "./Screens/Home";
import { StyleSheet} from 'react-native';
import User from './Screens/User';
import { createStackNavigator } from '@react-navigation/stack'

import Graphs from './Screens/Graph';
import Welcome from "./Screens/Welcome"
import InSport from "./Screens/InSport";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()
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
    backgroundColor: "#2B2D42",
  }  
}



export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions} initialRouteName="Home">
      <Tab.Screen 
          name="Graphs" 
          component={Graphs} 
          options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={styles.container}> 
                  <Ionicons name="bar-chart" size={32} color="white" />
                </View>
              )
            }
          }}
          
          />
          <Tab.Screen 
          name="Home" 
          component={HomeStack} 
          options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={styles.container}> 
                  <Ionicons name="add-circle" size={32} color="#66AEC5" />
            </View>
              )
            }
          }}
          />
          <Tab.Screen 
          name="User" 
          component={User} 
          options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={styles.container}> 
                  <Ionicons name="person" size={32} color="white" />
            </View>
              )
            }
          }}
          />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomePage" component={Home} />
      <Stack.Screen name="InSportPage" component={InSport} />
    </Stack.Navigator>
  );
};

const WelcomeStack = () => {
  return(
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="WelcomePage" component={Welcome} />
      
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2B2D42',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});