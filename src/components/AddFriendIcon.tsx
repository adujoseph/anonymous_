import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import * as RootNavigation from '../../rootNavigation';
import {addFriend} from '../constant/index';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const AddFriendIcon = () => {
  const handlePress = () => {
    console.log('press');
    RootNavigation.navigate(addFriend);
  };
  return (
    <>
      <TouchableOpacity onPress={handlePress} style={styles.btn}>
        <Text> + </Text>
      </TouchableOpacity>
    </>
  );
};

export default AddFriendIcon;

const styles = StyleSheet.create({
  btn: {
    padding: hp(0.5),
    borderRadius: hp(4),
    backgroundColor: 'lightgray',
    margin: hp(1),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
