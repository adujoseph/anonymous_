import React, {useEffect} from 'react';
import {ImageBackground, StyleSheet, StatusBar} from 'react-native';
import {register, login, chatList} from '../../constant';
import {Colors} from '../../utils/themes';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({navigation}: any) => {
  useEffect(() => {
    setTimeout(() => {
      handleRouteOptions();
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation]);
  const handleRouteOptions = async () => {
    const token = await AsyncStorage.getItem('token');
    const firstTime = await AsyncStorage.getItem('first');
    if (firstTime) {
      navigation.replace(register);
      return;
    }
    if (token) {
      navigation.replace(chatList);
    } else {
      navigation.replace(login);
    }
  };
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={Colors.primary}
        translucent={true}
      />
      <ImageBackground
        style={styles.container}
        source={require('../../assets/images/splash.png')}
      />
    </>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
  },
});
