import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {Colors} from '../../utils/themes';
import SplashScreen from '../../screens/splashscreen/SplashScreen';
import LoginScreen from '../../screens/loginscreen/LoginScreen';
import RegisterScreen from '../../screens/registerscreen/RegisterScreen';
import AddFriendsScreen from '../../screens/addFriends/AddFriends';
import CallerScreen from '../../screens/callscreen/CallScreen';
import ChatListScreen from '../../screens/chatlist/ChatList';
import ChatRoomScreen from '../../screens/chatroom/ChatRoom';
import ForgotPasswordScreen from '../../screens/forgotPassword/ForgotPassword';
import ChangePasswordScreen from '../../screens/changePassword/ChangePassword';
import {
  splash,
  login,
  register,
  chatList,
  chatRoom,
  addFriend,
  caller,
  forgot,
  changepassword,
} from '../../constant/index';
import AddFriendIcon from '../../components/AddFriendIcon';

const RootStack = createStackNavigator();

const RootStackScreen = () => (
  <RootStack.Navigator
    initialRouteName={splash}
    screenOptions={{
      headerBackTitle: '',
    }}>
    <RootStack.Screen
      name={splash}
      component={SplashScreen}
      options={{
        headerShown: false,
        headerTransparent: true,
        headerTitle: '',
        // headerTintColor: "#E96B03",
      }}
    />
    <RootStack.Screen
      name={login}
      component={LoginScreen}
      options={{
        headerShown: false,
      }}
    />
    <RootStack.Screen
      name={register}
      component={RegisterScreen}
      options={{
        headerTransparent: true,
        headerTitle: '',
      }}
    />
    <RootStack.Screen
      name={chatList}
      component={ChatListScreen}
      options={{
        // headerShown: false,
        // headerTransparent: true,
        headerTitle: 'Chat',
        headerRight: () => <AddFriendIcon />,
      }}
    />
    <RootStack.Screen
      name={chatRoom}
      component={ChatRoomScreen}
      options={{
        headerTransparent: true,
        // headerBlurEffect: 'extraLight',
        headerTitle: '',
        headerBackTitle: '',
        //headerTintColor: Colors.primary,
      }}
    />
    <RootStack.Screen
      name={addFriend}
      component={AddFriendsScreen}
      options={{
        // headerTransparent: true,
        // headerBlurEffect: 'extraLight',
        headerTitle: 'Add Friends',
        headerBackTitle: '',
        //headerTintColor: Colors.primary,
      }}
    />
    <RootStack.Screen
      name={caller}
      component={CallerScreen}
      options={{
        headerTransparent: true,
        //headerBlurEffect: 'extraLight',
        headerTitle: 'Ongoing Call',
        headerBackTitle: '',
        //headerTintColor: Colors.primary,
      }}
    />
    <RootStack.Screen
      name={forgot}
      component={ForgotPasswordScreen}
      options={{
        headerTransparent: true,
        //headerBlurEffect: 'extraLight',
        headerTitle: '',
        headerBackTitle: '',
        //headerTintColor: Colors.primary,
      }}
    />
    <RootStack.Screen
      name={changepassword}
      component={ChangePasswordScreen}
      options={{
        headerTransparent: true,
        //headerBlurEffect: 'extraLight',
        headerTitle: '',
        headerBackTitle: '',
        //headerTintColor: Colors.primary,
      }}
    />
  </RootStack.Navigator>
);

export default RootStackScreen;
