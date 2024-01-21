import React from 'react';
import { View, Text , StyleSheet} from 'react-native';
import { AntDesign, Entypo, FontAwesome } from '@expo/vector-icons';

export default function OptionItem({ courselen, time, price, author }) {
  return (
    <View style = {{display : "flex" , flexDirection : "row" , justifyContent : "space-between",
    marginTop : 10 , 
    padding : 10,
    }}>
        <View>
            <View style={Styles.container}>
                <AntDesign name="book" size={20} color="black" />
                <Text style={Styles.textstyle}>{`${courselen} Chapters`}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
                <Entypo name="clock" size={20} color="black" />
                <Text style={Styles.textstyle}>{`Duration: ${time}`}</Text>
            </View>
      </View>
      <View>
      
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
            <FontAwesome name="money" size={20} color="black" />
            <Text style={Styles.textstyle}>{`Price: ${price == 0 ? 'Free' : price}`}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <FontAwesome name="user" size={20} color="black" />
            <Text style={Styles.textstyle}>{`Author: ${author}`}</Text>
        </View>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        alignItems: 'center',
         marginBottom: 5,
    },

    textstyle : {
        marginLeft: 5,
        fontFamily : "Outfit-lig",
    }
  });
  
