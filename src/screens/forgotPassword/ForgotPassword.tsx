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
import {changepassword, register} from '../../constant';

const ForgotPasswordScreen = (props: any) => {
  const [email, setEmail] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const {navigation} = props;
  const handleLogin = () => {
    resetError();
    if (!email) {
      setErrorMessage('Enter email');
      return;
    }
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.match(regex)) {
    } else {
      setErrorMessage('Invalid Email Address');
      return;
    }
    setLoading(true);
    const userDetails = {email};
    console.log(userDetails);
    setLoading(false);
    navigation.replace(changepassword);
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
          <View style={{width: '65%'}}>
            <Text>Reset Password</Text>
          </View>
          <View>
            <TextField
              value={email}
              onFocus={() => resetError()}
              onBlur={() => null}
              onChangeText={(val: string) => setEmail(val)}
              placeholder="Enter email"
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

export default ForgotPasswordScreen;

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
