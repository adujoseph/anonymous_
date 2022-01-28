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
import {login} from '../../constant';

const ChangePasswordScreen = (props: any) => {
  const [password, setPassword] = useState<string>('');
  const [code, setCode] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const {navigation} = props;
  const handleLogin = () => {
    resetError();
    if (!code) {
      setErrorMessage('Enter User ID');
      return;
    }
    if (!password) {
      setErrorMessage('Enter Password');
      return;
    }
    // const regex = '^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$';
    setLoading(true);
    const userDetails = {password, code};
    console.log(userDetails);
    setLoading(false);
    navigation.replace(login);
  };
  const resetError = () => {
    setErrorMessage('');
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
          {/* <CustomButton
            text="  Register    >   "
            loading={false}
            onPress={() => navigation.replace(register)}
            bgColor={Colors.white}
            textColor={Colors.primary}
            borderColor={Colors.primary}
          /> */}
        </View>
        <View style={{width: '85%'}}>
          <View style={{width: '65%'}}>
            <Text>Change Password</Text>
          </View>
          <View>
            <TextField
              value={code}
              onFocus={() => resetError()}
              onBlur={() => null}
              onChangeText={(val: string) => setCode(val)}
              placeholder="Enter code"
            />
            <TextField
              value={password}
              onFocus={() => resetError()}
              onBlur={() => null}
              onChangeText={(val: string) => setPassword(val)}
              placeholder="New password"
            />
            <View style={{width: '100%'}}>
              <CustomButton
                text="Reset Password"
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

export default ChangePasswordScreen;

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
