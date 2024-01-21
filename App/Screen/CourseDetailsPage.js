import { View, Text, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CourseSection from '../Components/CourseDetails/CourseSection';
import ChapterSection from '../Components/CourseDetails/ChapterSection';

export default function CourseDetailsPage() {
    const naviagtion = useNavigation();
    const params = useRoute().params;

    useEffect(() => {
        // console.log(params.course.chapters);
    },[params.course]);


  return params.course && (
    <ScrollView style = {{padding : 20 , marginTop : 20}}>
    <TouchableOpacity onPress={() => naviagtion.goBack()}>
      <Ionicons name="arrow-back-circle-sharp" size={40} color="black" />
    </TouchableOpacity>
    <CourseSection course = {params.course} />
    <ChapterSection courseList = {params.course.chapters}/>
    </ScrollView>
  )
}