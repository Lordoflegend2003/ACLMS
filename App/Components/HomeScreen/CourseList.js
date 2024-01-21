import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ScrollView, Image, TouchableOpacity } from 'react-native';
import { getCourseList } from '../../Services';
import Subheading from '../Subheading';
import CourseItem from './CourseItem';
import Colors from '../../Utils/Colors';
import { useNavigation } from '@react-navigation/native';

export default function CourseList({ level }) {
  const [courseList, setCourseList] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = () => {
    getCourseList(level).then(res => {
      // console.log("RES", res);
      setCourseList(res?.courses);
    });
  };

  return (
    <ScrollView>
      <Subheading text={level + ' Courses'} />
      <FlatList
        data={courseList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Course-Detail', { course: item })}>
            <CourseItem item={item} />
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
}
