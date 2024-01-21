import { View, Text, Image, TextInput } from 'react-native';
import { StyleSheet } from 'react-native';
import React from 'react';
import { useUser } from '@clerk/clerk-expo';
import Colors from '../../Utils/Colors';
import { FontAwesome } from '@expo/vector-icons';
import coin from "../../../assets/imgs/coin.png";

export default function Header() {
  const { isLoaded, isSignedIn, user } = useUser();
  
  return isLoaded && (
    <View>
    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", paddingTop: 20 }}>
      <View>
        <Image source={{ uri: user?.imageUrl }}
          style={{ width: 50, height: 50, borderRadius: 99 }}
        />
        <View>
          <Text style={{ ...styles.mainHeader, paddingTop: 10}}>Welcome,</Text>
          <Text style={{ ...styles.maincontent,  paddingTop: 5 }}>{user.fullName}</Text>
        </View>
      </View>
      <View>
        <Image source={coin} style={{ width: 50, height: 50 }} />
        <Text style={{ ...styles.maincontent, paddingTop: 5, marginLeft: 5 }}>3500</Text>
      </View>
    </View>
    <View style = {{ marginTop : 15 , display : "flex" ,  padding : 10 , borderRadius : 50 ,
    justifyContent : 'space-around' , flexDirection : "row" ,
    backgroundColor : Colors.SEC_DARK_LIGHT , alignItems : "center"}}>
      <TextInput style = {{alignItems : "center" , opacity : 0.5 , justifyContent : "center"}} placeholder="Search Courses..."/>
      <FontAwesome name="search" size={24} color={Colors.BLACK} />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainHeader: {
    color: Colors.WHITE,
    fontFamily: 'Outfit-bold',
    fontSize: 20,
  },
  maincontent: {
    color: Colors.WHITE,
    fontFamily: 'Outfit-lig',
    fontSize: 15,
  }
});
