import React from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {RFPercentage as rf} from 'react-native-responsive-fontsize';

const CustomButton = (props: any) => {
  const {loading, onPress, text, bgColor, textColor, borderColor} = props;
  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.custombtn,
          {
            backgroundColor: bgColor,
            borderColor,
          },
        ]}>
        {loading ? (
          <ActivityIndicator size="large" color={textColor} />
        ) : (
          <Text style={[styles.textSize, {color: textColor}]}>{text}</Text>
        )}
      </TouchableOpacity>
    </>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  custombtn: {
    padding: hp(1),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: hp(3),
    marginVertical: hp(2),
    borderWidth: 2,
  },
  textSize: {
    fontSize: rf(2),
  },
});
