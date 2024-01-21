import { View, Text, Image } from 'react-native';
import React from 'react';
import Colors from '../../Utils/Colors';

export default function CourseItem({ item }) {
  // Calculate the desired width based on the length of item.name
  const dynamicWidth = 150 + item.name.length * 5;

  return (
    <View
      style={{
        padding: 10,
        backgroundColor: Colors.SECONDARY_DARk,
        marginRight: 15,
        borderRadius: 10,
        marginTop: 15,
      }}
    >
      <Image
        source={{ uri: item?.banner?.url }}
        style={{ width: dynamicWidth, height: 120, borderRadius: 10 }}
      />
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text
          style={{
            color: Colors.BLACK,
            fontFamily: 'Outfit-lig',
            marginTop: 10,
          }}
        >
          {item.name}
        </Text>
        <Text
          style={{
            color: Colors.BLACK,
            fontFamily: 'Outfit-lig',
            marginTop: 10,
          }}
        >
          {item.courselevel}
        </Text>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text
          style={{
            color: Colors.BLACK,
            fontFamily: 'Outfit-lig',
            marginTop: 10,
          }}
        >
          {item.time}
        </Text>
        <Text
          style={{
            color: Colors.BLACK,
            fontFamily: 'Outfit-lig',
            marginTop: 10,
          }}
        >
          {item.price === '0' ? 'Free' : '₹ ' + item.price}
        </Text>
      </View>
    </View>
  );
}
