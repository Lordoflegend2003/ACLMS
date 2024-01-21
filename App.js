import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import Colors from './App/Utils/Colors';
import LoginScreen from './App/Screen/LoginScreen';
import { ClerkProvider, SignedIn, SignedOut, useAuth } from '@clerk/clerk-expo';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigators/TabNavigation';

export default function App() {
  const CLERK_PUBLISHABLE_KEY = 'pk_test_bWFnbmV0aWMtdGl0bW91c2UtMjkuY2xlcmsuYWNjb3VudHMuZGV2JA';

  const [fontsLoaded] = useFonts({
    'Outfit-mid': require('./assets/fonts/Outfit-Medium.ttf'),
    'Outfit-ebold': require('./assets/fonts/Outfit-ExtraBold.ttf'),
    'Outfit-bold': require('./assets/fonts/Outfit-Bold.ttf'),
    'Outfit-reg': require('./assets/fonts/Outfit-Regular.ttf'),
    'Outfit-lig': require('./assets/fonts/Outfit-Light.ttf'),
  });

  return (
    <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
      <SignedIn>
        <NavigationContainer>
          <TabNavigation />
        </NavigationContainer>
      </SignedIn>
      <SignedOut>
        <LoginScreen />
      </SignedOut>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.LIGHT_PRIMARY,
    marginTop: 20,
  },
});
