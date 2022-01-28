import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {RFPercentage as rf} from 'react-native-responsive-fontsize';

const TextField = (props: any) => {
  const {value, onFocus, onBlur, onChangeText, placeholder, secureTextEntry} =
    props;
  return (
    <>
      <TextInput
        placeholder={placeholder}
        value={value}
        style={styles.inputStyle}
        onFocus={onFocus}
        onBlur={onBlur}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </>
  );
};

export default TextField;

const styles = StyleSheet.create({
  inputStyle: {
    paddingLeft: hp(3),
    borderRadius: hp(3),
    color: '#333',
    backgroundColor: '#fff',
    elevation: 5,
    height: hp(5),
    marginVertical: hp(1),
    width: '100%',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4,
    shadowRadius: 2,
    fontSize: rf(1.6),
  },
});
