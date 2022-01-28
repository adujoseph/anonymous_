import React from 'react';
import {StyleSheet, StatusBar, View, Text} from 'react-native';
import {Colors} from '../../utils/themes';
import CustomButton from '../../components/CustomButton';
import {login} from '../../constant';

const ChatListScreen = (props: any) => {
  const {navigation} = props;

  const handleLogout = () => {
    navigation.replace(login);
  };
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={Colors.primary}
        translucent={true}
      />
      <View style={styles.container}>
        <Text>Chats</Text>
      </View>
      <View style={{width: '90%', alignSelf: 'center', padding: 20}}>
        <CustomButton
          text="Log out"
          loading={false}
          onPress={handleLogout}
          bgColor={Colors.primary}
          textColor={Colors.white}
          borderColor={Colors.primary}
        />
      </View>
    </>
  );
};

export default ChatListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
