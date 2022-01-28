import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const SearchBar = (props: any) => {
  const {placeholder, value, onChangeText} = props;
  return (
    <>
      <View style={styles.wrapper}>
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          style={styles.input}
        />
      </View>
    </>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    borderRadius: hp(2),
    elevation: 5,
    padding: hp(1),
    width: '90%',
    alignSelf: 'center',
    marginVertical: hp(1),
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    paddingLeft: hp(2),
  },
});
