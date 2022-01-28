import React from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Colors} from '../../utils/themes';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Avatar from '../../components/Avatar';
import dogface from '../../assets/images/dog.png';

const CallScreen = () => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={Colors.primary}
        translucent={true}
      />
      <View style={styles.container}>
        <View style={{paddingBottom: hp(5)}}>
          <Avatar src={dogface} />
        </View>
        <View style={{paddingVertical: hp(1)}}>
          <Text>AnonymXXX123</Text>
        </View>
        <View style={{paddingVertical: hp(1)}}>
          <Text> 01:20:03</Text>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.btn}>
            <Ionicons name="volume-high" size={20} color={Colors.primary} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_red}>
            <Ionicons name="call" size={20} color={Colors.white} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Ionicons name="mic" size={20} color={Colors.primary} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default CallScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    paddingTop: hp(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    alignSelf: 'center',
  },
  btn: {
    padding: hp(1.5),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 40,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 5,
  },
  btn_red: {
    padding: hp(1.5),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 40,
  },
});
