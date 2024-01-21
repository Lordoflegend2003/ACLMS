import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../Screen/HomeScreen';
import CourseDetailsPage from '../Screen/CourseDetailsPage';
const Stack = createStackNavigator();


export default function HomeScreenNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown : false}}>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Course-Detail' component={CourseDetailsPage}/>
    </Stack.Navigator>
  )
}