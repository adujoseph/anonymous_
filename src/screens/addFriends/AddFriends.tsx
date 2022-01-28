import React from 'react';
import {StyleSheet, StatusBar, SafeAreaView, View} from 'react-native';
import {Colors} from '../../utils/themes';
import SearchBar from '../../components/SearchBar';

const AddFriendsScreen = () => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={Colors.primary}
        translucent={true}
      />
      <SafeAreaView style={styles.container}>
        <View>
          <SearchBar placeholder="Search user" />
        </View>
      </SafeAreaView>
    </>
  );
};

export default AddFriendsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#fff',
  },
});
