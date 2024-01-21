import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Header from '../Components/HomeScreen/Header'
import Colors from '../Utils/Colors'
import CourseList from '../Components/HomeScreen/CourseList'

export default function HomeScreen() {
  return (
    <ScrollView>
        <View style = {{backgroundColor : Colors.BLACK , 
        height : 240 , padding : 20,
        }}>
        <Header/>
        </View>
        <View >
        <View style = {{ padding : 10 , marginTop : 10}}> 
          <CourseList level ={'Basic'}/>
        </View>
        <View style = {{ padding : 10 ,  marginTop : 10}}> 
          <CourseList level ={'Moderate'}/>
        </View>
        <View style = {{ padding : 10}}> 
          <CourseList level ={'Advanced'}/>
        </View>
        </View>
    </ScrollView>
  )
}