import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

GoogleSignin.configure({
  webClientId:
    '799857612273-clqhqs059i72flgievgc136u8ssacvr6.apps.googleusercontent.com',
});

const App = () => {
  async function onGoogleButtonPress() {
    try {
      // Check if your device supports Google Play
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      // Get the users ID token
      const {idToken} = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      auth().signInWithCredential(googleCredential);
      console.log('User Signed In Successfully');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View>
      <TouchableOpacity onPress={onGoogleButtonPress}>
        <Text>Sign In With Google</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;