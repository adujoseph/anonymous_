import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../utils/themes';
import * as RootNavigation from '../../rootNavigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {caller} from '../constant';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
// Ionicons.loadFont();

const AcceptIncomingCalls = ({callData}: any) => {
  const [callStatus, setCallStatus] = useState<boolean>(callData);
  console.log(callData, 'doing?');
  useEffect(() => {
    // setCallStatus(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAccept = () => {
    RootNavigation.navigate(caller);
    setCallStatus(false);
  };
  const handleReject = () => {
    setCallStatus(false);
  };

  return (
    <>
      {callStatus ? (
        <View style={styles.wrapper}>
          <View>
            <Text style={styles.titleText}>Incoming calls from</Text>
          </View>
          <View style={styles.btnWrap}>
            <TouchableOpacity onPress={handleAccept}>
              <View style={styles.btn}>
                <Ionicons name="call" size={20} color={Colors.primary} />
              </View>
              <Text style={{color: 'white'}}>Accept</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleReject}>
              <View style={styles.btn}>
                <Ionicons name="call" size={20} color={'red'} />
              </View>
              <Text style={{color: 'white'}}>Reject</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
    </>
  );
};

export default AcceptIncomingCalls;

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: hp(8),
    zIndex: 9999999999,
    backgroundColor: Colors.primary,
    width: '98%',
    alignSelf: 'center',
    borderRadius: 10,
    padding: hp(1),
    minHeight: hp(2),
  },
  titleText: {textAlign: 'center', padding: hp(1), color: 'white'},
  btnWrap: {
    flexDirection: 'row',
    padding: hp(1),
    justifyContent: 'space-between',
  },
  btn: {
    padding: hp(1.5),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 40,
  },
});
