import React from 'react';
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

const ChatRoomScreen = () => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={Colors.primary}
        translucent={true}
      />
      <KeyboardAvoidingView style={styles.container}>
        <View>
          <View>
            <Text>Chat Room</Text>
          </View>
          <View>
            <TextField placeholder="user id" />
            <TextField placeholder="password" />
            <TextField placeholder="confirm password" />
            <View>
              <CustomButton text="Create a space" />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default ChatRoomScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
