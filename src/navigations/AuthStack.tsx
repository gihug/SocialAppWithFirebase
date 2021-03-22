import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import LoginScreen from '../screens/login-screen/LoginScreen';
import OnboardingScreen from '../screens/onboarding-screen/OnboardingScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
  const [isFirstLaunch, setIsFirstLaunch] = React.useState<any | null>(null);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem('adreadyLaunched').then(value => {
      if (value == null) {
        AsyncStorage.setItem('adreadyLaunched', 'true'); // No need to wait for
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    }); // Add some error handling, also you can simply do setIsFirstLaunch(null)
  }, []);

  if (isFirstLaunch == null) {
    return null;
  } else if (isFirstLaunch === true) {
    routeName = 'Onboarding';
  } else {
    routeName = 'Login';
  }

  return (
    <Stack.Navigator initialRouteName={routeName}>
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{header: () => null}}
      />
      {/* <Stack.Screen name="Signup" component={} /> */}
    </Stack.Navigator>
  );
};

export default AuthStack;
