import React, {useState} from 'react';
import {
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Colors} from '../../utils/themes';
import TextField from '../../components/TextField';
import CustomButton from '../../components/CustomButton';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {chatList, forgot, register} from '../../constant';
import axios from '../../services/Axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface UserDetails {
  username: string;
  password: string;
}
const LoginScreen = (props: any) => {
  const [userId, setUserId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const {navigation} = props;
  const handleLogin = () => {
    resetError();
    if (!userId) {
      setErrorMessage('Enter User ID');
      return;
    }
    if (!password) {
      setErrorMessage('Enter Password');
      return;
    }
    setLoading(true);
    const userDetails = {username: userId, password};
    loggin(userDetails);
  };
  const resetError = () => {
    setErrorMessage('');
  };

  const loggin = async (payload: UserDetails) => {
    try {
      const url = '/login';
      const {data}: any = await axios.post(url, payload);
      if (data) {
        await AsyncStorage.setItem('token', data.access_token);
        navigation.replace(chatList);
        setLoading(false);
      } else {
        setErrorMessage('an error occured');
        setLoading(false);
      }
    } catch (err: any) {
      console.log(err.response.data.message);
      setLoading(false);
      setErrorMessage(err.response.data.message);
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

      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.topBtn}>
          <CustomButton
            text="  Register    >   "
            loading={false}
            onPress={() => navigation.replace(register)}
            bgColor={Colors.white}
            textColor={Colors.primary}
            borderColor={Colors.primary}
          />
        </View>
        <View style={{width: '85%'}}>
          <View style={{width: '65%', alignSelf: 'center'}}>
            <Text>Welcome back! Let's sign you in</Text>
          </View>
          <View>
            <TextField
              value={userId}
              onFocus={() => resetError()}
              onBlur={() => null}
              onChangeText={(val: string) => setUserId(val)}
              placeholder="User ID"
            />
            <TextField
              value={password}
              onFocus={() => resetError()}
              onBlur={() => null}
              onChangeText={(val: string) => setPassword(val)}
              placeholder="Password"
              secureTextEntry={true}
            />
            <TouchableOpacity onPress={() => navigation.navigate(forgot)}>
              <Text>Forgot password ?</Text>
            </TouchableOpacity>
            <View style={{width: '100%'}}>
              <CustomButton
                text="Log in"
                loading={loading}
                onPress={handleLogin}
                bgColor={Colors.primary}
                textColor={Colors.white}
                borderColor={Colors.primary}
              />
            </View>
            <View>
              <Text style={{color: 'red'}}>{errorMessage}</Text>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  topBtn: {
    position: 'absolute',
    top: hp(8),
    right: hp(4),
    zIndex: 9999999,
  },
});
