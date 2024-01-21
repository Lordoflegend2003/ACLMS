import { View, Text } from 'react-native'
import React from 'react'
import Colors from '../Utils/Colors'

export default function Subheading({text , color = Colors.BLACK}) {
  return (
    <View>
      <Text style = {{
       fontFamily : "Outfit-mid",
       fontSize : 24,
       marginLeft : 10,
       color : color,
      }}>{text}</Text>
    </View>
  )
}