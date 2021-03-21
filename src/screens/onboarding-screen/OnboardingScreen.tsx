import React from 'react';
import {Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({navigation}: any) => {
  return (
    <Onboarding
      onSkip={() => navigation.replace('Login')} // replce thay thế và không back lại được
      onDone={() => navigation.navigate('Login')}
      pages={[
        {
          backgroundColor: '#fff',
          image: <Image source={require('../../assets/img/gihug.png')} />,
          title: 'Onboarding 1',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={require('../../assets/img/gihug2.png')} />,
          title: 'Onboarding 2',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
      ]}
    />
  );
};

export default OnboardingScreen;
