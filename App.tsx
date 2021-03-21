import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import LoginScreen from './src/screens/login-screen/LoginScreen';
import OnboardingScreen from './src/screens/onboarding-screen/OnboardingScreen';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const AppStack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppStack.Navigator headerMode="none">
          <AppStack.Screen name="Onboarding" component={OnboardingScreen} />
          <AppStack.Screen name="Login" component={LoginScreen} />
        </AppStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
export default App;
