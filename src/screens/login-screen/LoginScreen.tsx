/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './LoginScreen.css';
import AntDesign from 'react-native-vector-icons/AntDesign';

const LoginScreen = () => {
  return (
    <View>
      <Text>
        Login <AntDesign name="user" size={36} color="#4F8EF7" />
      </Text>
    </View>
  );
};

export default LoginScreen;
