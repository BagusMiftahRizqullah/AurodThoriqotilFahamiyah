import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//Screen
import LaunchScreen from './src/Screen/LaunchScreen/LaunchScreen';
import Home from './src/Screen/Home/Home';



const Root = () => {
    const Stack = createStackNavigator();


  return (
       <NavigationContainer>
            <Stack.Navigator initialRouteName={'LaunchScreen'}>
                <Stack.Screen
                name="LaunchScreen"
                component={LaunchScreen}
                options={{headerShown: false}}
                />
                  <Stack.Screen
                name="Home"
                component={Home}
                options={{headerShown: false}}
                />
            </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Root

const styles = StyleSheet.create({})