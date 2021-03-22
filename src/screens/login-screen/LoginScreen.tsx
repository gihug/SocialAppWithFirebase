/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import FormButton from '../../components/form-button/FormButton';
import FormInput from '../../components/form-input/FormInput';
import SocialButton from '../../components/social-button/SocialButton';
import styles from './LoginScreen.css';

const LoginScreen = ({navigation}: any) => {
  const [email, setEmail] = useState<String>();
  const [password, setPassword] = useState<String>();

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/img/gihug.png')}
        style={styles.logo}
      />
      <Text style={styles.text}>Manchester United</Text>

      <FormInput
        labelValue={email}
        onChangeText={(useEmail: string) => setEmail(useEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <FormInput
        labelValue={password}
        onChangeText={(userPassword: string) => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />

      <FormButton
        buttonTitle="Sign In"
        onPress={() => Alert.alert('Sign in Clicked!')}
      />

      <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
        <Text style={styles.navButtonText}>Forgot Password?</Text>
      </TouchableOpacity>

      <SocialButton
        buttonTitle="Sign in with Facebook"
        btnType="facebook"
        color="#4867aa"
        backgroundColor="#e6eaf4"
        onPress={() => {}}
      />

      <SocialButton
        buttonTitle="Sign in with Google"
        btnType="google"
        color="#de4d41"
        backgroundColor="#f5e7ea"
        onPress={() => {}}
      />

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => {
          // navigation.navigate('Signup');
        }}>
        <Text style={styles.navButtonText}>
          Don't have account? Create here
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
