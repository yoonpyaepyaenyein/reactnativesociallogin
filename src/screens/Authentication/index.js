import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import React from 'react';
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';
import {_signInWithGoogle, _signInWithFacebook} from '../../Config/auth';

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

  const signInWithFacebook = async () => {
    let cred = await _signInWithFacebook();
    console.log('cred=>', cred);
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
      <TouchableOpacity onPress={() => signInWithFacebook()}>
        <Text
          style={{
            color: 'white',
            backgroundColor: 'blue',
            padding: 8,
          }}>
          SignIn With FaceBook
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthenticationScreen;
