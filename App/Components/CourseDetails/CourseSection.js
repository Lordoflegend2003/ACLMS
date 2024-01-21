import { View, Text, Image, Dimensions } from 'react-native';
import React from 'react';
import OptionItem from './OptionItem';
import Colors from '../../Utils/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function CourseSection({ course }) {
  const isNameLong = course.name.length > 20;

  return (
    <View style={{ padding: 7 }}>
      <View style={{ flexDirection: isNameLong ? 'column' : 'row', justifyContent: "space-between" }}>
        <Text style={{ fontFamily: "Outfit-ebold", fontSize: 20, padding: 6 }}>{course.name}</Text>
        {isNameLong ? (
          <Text style={{ fontFamily: "Outfit-ebold", fontSize: 20, padding: 6 }}>{course.courselevel}</Text>
        ) : null}
      </View>
      {course.banner && course.banner.url && (
        <Image style={{ width: Dimensions.get('screen').width * 0.86, height: 200, borderRadius: 20 }} source={{ uri: course.banner.url }} />
      )}
      <View>
        <OptionItem
          courselen={course.chapters ? course.chapters.length : 0}
          time={course.time}
          price={course.price}
          author={course.author}
        />
      </View>
      <View>
        <Text style={{
          fontSize: 20,
          fontFamily: "Outfit-mid",
          padding: 5,
          marginBottom: 5,
          marginTop: 5,
        }}>Description:</Text>
        <Text style={{ fontFamily: "Outfit-lig", color: Colors.grey, lineHeight: 25 }}>{course.description?.markdown}</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
        <TouchableOpacity style={{
          padding: 5,
          backgroundColor: "black", // Change background color based on price
          borderRadius: 10,
          width: Dimensions.get('screen').width * 0.4,
          height: 45, // Increase the height for better visibility
          alignItems: 'center', // Center the text horizontally
          justifyContent: 'center', // Center the text vertically
        }}>
          <Text style={{ color: Colors.WHITE, fontSize: 14, fontFamily: "Outfit-ebold" }}>{course.price > 0 ? 'Enroll Now' : 'Enroll for Free'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          padding: 5,
          backgroundColor: "black", // Change background color based on price
          borderRadius: 10,
          width: Dimensions.get('screen').width * 0.4,
          height: 45, // Increase the height for better visibility
          alignItems: 'center', // Center the text horizontally
          justifyContent: 'center', // Center the text vertically
        }}>
          <Text style={{ color: Colors.WHITE, fontSize: 14, fontFamily: "Outfit-ebold" }}>Get Membership</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
