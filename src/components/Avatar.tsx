import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Avatar = (props: any) => {
  const {src} = props;
  return (
    <>
      <View style={styles.box}>
        <Image source={src} />
      </View>
    </>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  box: {
    // paddingLeft: hp(3),
    borderRadius: hp(30),
    backgroundColor: '#fff',
    elevation: 5,
    marginVertical: hp(1),
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4,
    shadowRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
