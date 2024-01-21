import { View, Text } from 'react-native';
import React from 'react';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import Colors from '../../Utils/Colors';

export default function ChapterSection({courseList}) {
  return (
    <View style = {{marginTop : 10 , padding : 8 , marginBottom : 30}}>
    <Text style = {{fontFamily : "Outfit-bold" , fontSize : 18 , padding : 7}}>Chapters</Text>
      {courseList.map((item , index) => (
    <View style = {{display : "flex" , flexDirection : "row" ,
         gap : 10 , alignItems : "center" , justifyContent : "space-between",
         marginBottom : 5 , backgroundColor : Colors.WHITE , height: 50 , borderRadius : 12 , padding : 13
         }}>
        <View key={item.id} style = {{display : "flex" , flexDirection : "row" ,
         gap : 10 , alignItems : "center"  }}>
          <Text style = {{ color: Colors.GRAY , fontFamily : "Outfit-mid" , fontSize : 20}}>{index + 1 }</Text>
          <Text style = {{ color: Colors.GRAY , fontFamily : "Outfit-lig", fontSize : 20}}>{item.title}</Text>
        </View>
            <Ionicons name="md-lock-closed" size={24} color = {Colors.GRAY} />
    </View>
      ))}
    </View>
  );
}
