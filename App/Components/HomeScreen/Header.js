import { View, Text , Image } from 'react-native'
import React from 'react'
// import {useUser} from '@clerk/clerk-expo';

export default function Header() {
    const {isLoaded , isSignedIn , user} = useUser();
  return isLoaded &&(
    <View>
      <View>
        <Image source={{uri : user?.imageUrl}}
        style = {{width : 50 , height : 50 , borderRadius : 99}}
        />
      </View>
      <View>
        <Text></Text>
      </View>
    </View>
  )
}