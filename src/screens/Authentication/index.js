import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';
import {_signInWithGoogle} from '../../Config/auth';

const AuthenticationScreen = ({navigation}) => {
  const signInWithGoogle = async () => {
    _signInWithGoogle()
      .then(data => {
        console.log('USER DATA _____', data);
        navigation.navigate('Home');
      })
      .catch(error => {
        console.log('Error is ____', error);
      });
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
      }}>
      <StatusBar
        backgroundColor={'#000'}
        barStyle={'light-content'}
        animated={true}
      />
      <GoogleSigninButton onPress={() => signInWithGoogle()} />
    </View>
  );
};

export default AuthenticationScreen;
