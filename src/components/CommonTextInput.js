import React from 'react';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';

const CommonTextInput = ({label, value, onChangeText}) => {
  return (
    <TextInput
      label={label}
      value={value}
      onChangeText={onChangeText}
      mode="outlined"
      autoFocus={true}
    />
  );
};

export default CommonTextInput;

const styles = StyleSheet.create({});
