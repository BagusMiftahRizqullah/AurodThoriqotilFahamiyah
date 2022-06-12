import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//Screen
import LaunchScreen from './src/Screen/LaunchScreen/LaunchScreen';
import Home from './src/Screen/Home/Home';
import SoundScreen from './src/Screen/SoundScreen/SoundScreen'



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
                    <Stack.Screen
                name="Sound"
                component={SoundScreen}
                options={{headerShown: true}}
                />
            </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Root

const styles = StyleSheet.create({})