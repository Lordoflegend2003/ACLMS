import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screen/HomeScreen';
import MyCourse from '../Screen/MyCourse';
import LeaderBoard from '../Screen/LeaderBoard';
import ProfileScreen from '../Screen/ProfileScreen';
import { Entypo, FontAwesome5, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import HomeScreenNavigation from './HomeScreenNavigation';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBarStyle={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center', // Optional: align items to center vertically
        backgroundColor: 'white', // Customize the background color if needed
        paddingVertical: 10, // Optional: adjust vertical padding
        paddingHorizontal: 20, // Optional: adjust horizontal padding
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeScreenNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="my-course"
        component={MyCourse}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="book-reader" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Leaderboard"
        component={LeaderBoard}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="leaderboard" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user-circle-o" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
