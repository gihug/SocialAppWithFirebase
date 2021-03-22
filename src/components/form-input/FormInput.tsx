import React from 'react';
import {TextInput, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './FormInput.css';

const FormInput = ({labelValue, placeholderText, iconType, ...rest}: any) => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.iconStyle}>
        <AntDesign name={iconType} size={25} color="#666" />
      </View>
      <TextInput
        style={styles.input}
        value={labelValue}
        placeholder={placeholderText}
        placeholderTextColor="#666"
        {...rest}
      />
    </View>
  );
};

export default FormInput;
