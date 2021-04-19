import React, {useContext, useState} from 'react';
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
import {AuthContext} from '../../navigations/AuthProvider';
import styles from './SignupScreen.css';

const SignupScreen = ({navigation}: any) => {
  const [email, setEmail] = useState<String>();
  const [password, setPassword] = useState<String>();
  const [confirmPassword, setConfirmPassword] = useState<String>();

  const {register}: any = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create an account</Text>

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

      <FormInput
        labelValue={confirmPassword}
        onChangeText={(confirmPassword: string) =>
          setConfirmPassword(confirmPassword)
        }
        placeholderText="Confirm Password"
        iconType="lock"
        secureTextEntry={true}
      />

      <FormButton
        buttonTitle="Sign up"
        onPress={() => register(email, password)}
      />

      <SocialButton
        buttonTitle="Sign up with Facebook"
        btnType="facebook"
        color="#4867aa"
        backgroundColor="#e6eaf4"
        onPress={() => {}}
      />

      <SocialButton
        buttonTitle="Sign up with Google"
        btnType="google"
        color="#de4d41"
        backgroundColor="#f5e7ea"
        onPress={() => {}}
      />

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => {
          navigation.navigate('Login');
        }}>
        <Text style={styles.navButtonText}>Have an account? Sign In </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;
