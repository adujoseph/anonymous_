import React, {useState} from 'react';
import {
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
  View,
  Text,
} from 'react-native';
import {Colors} from '../../utils/themes';
import TextField from '../../components/TextField';
import CustomButton from '../../components/CustomButton';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {chatList, login} from '../../constant';
import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

interface UserDetails {
  username: string;
  password: string;
  email: string;
}
const RegisterScreen = (props: any) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPass, setConfirmPass] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const {navigation} = props;

  const handleRegister = async () => {
    setErrorMessage('');
    if (!email) {
      setErrorMessage('Enter Email');
      return;
    }
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.match(regex)) {
    } else {
      setErrorMessage('Invalid Email Address');
      return;
    }
    //check with regex for valid email
    if (!username) {
      setErrorMessage('Enter User ID');
      return;
    }
    if (!password) {
      setErrorMessage('Enter Password');
      return;
    }
    if (password.length < 8) {
      setErrorMessage('Password must be at least 8 characters long');
      return;
    }
    // check if password is alphanumeric
    const alpha = /^[a-z0-9]+$/i;
    // const regex2 = /^[0-9a-zA-Z]+$/;
    if (password.match(alpha)) {
      console.log('Passed: ', password, password.match(alpha));
    } else {
      setErrorMessage(
        'password should have at least one alphabet and one number',
      );
      return;
    }
    if (password !== confirmPass) {
      setErrorMessage('Confirm password failed');
      return;
    }
    setLoading(true);
    const userDetails = {email, username, password};
    handler(userDetails);
  };
  const resetError = () => {
    setErrorMessage('');
  };
  const handler = async (payload: UserDetails) => {
    try {
      const url = 'https://anonymous-app-starks.herokuapp.com/register';
      const {data} = await axios.post(url, payload);
      if (data) {
        console.log('DATA::: ', data);
        // await AsyncStorage.setItem('token', data.access_token);
        navigation.replace(chatList);
        setLoading(false);
      } else {
        console.log('error');
      }
    } catch (err: any) {
      console.log('error: ', err.response.data.message);
      // setErrorMessage(err.response.data.message);
      setLoading(false);
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
            text=" Login    > "
            loading={false}
            onPress={() => navigation.replace(login)}
            bgColor={Colors.white}
            textColor={Colors.primary}
            borderColor={Colors.primary}
          />
        </View>
        <View style={{width: '85%'}}>
          <View>
            <Text>Welcome, Kindly create a free account</Text>
          </View>
          <View>
            <TextField
              value={username}
              onFocus={() => resetError()}
              onBlur={() => null}
              onChangeText={(val: string) => setUsername(val)}
              placeholder="User ID"
            />
            <TextField
              value={email}
              onFocus={() => resetError()}
              onBlur={() => null}
              onChangeText={(val: string) => setEmail(val)}
              placeholder="Enter email"
            />
            <TextField
              value={password}
              onFocus={() => resetError()}
              onBlur={() => null}
              onChangeText={(val: string) => setPassword(val)}
              placeholder="Password"
              secureTextEntry={true}
            />
            <TextField
              value={confirmPass}
              onFocus={() => resetError()}
              onBlur={() => null}
              onChangeText={(val: string) => setConfirmPass(val)}
              placeholder="Confirm password"
              secureTextEntry={true}
            />
            <View style={{width: '100%'}}>
              <CustomButton
                text="Create a space"
                loading={loading}
                onPress={handleRegister}
                bgColor={Colors.primary}
                textColor="white"
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

export default RegisterScreen;

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
