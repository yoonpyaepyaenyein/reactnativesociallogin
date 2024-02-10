import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

export const _signInWithGoogle = async () => {
  try {
    GoogleSignin.configure({
      webClientId:
        '799857612273-clqhqs059i72flgievgc136u8ssacvr6.apps.googleusercontent.com',
    });
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    const userInfo = await GoogleSignin.signIn();
    // Get the users ID token
    // const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(
      userInfo.idToken,
    );

    // Sign-in the user with the credential
    auth().signInWithCredential(googleCredential);
    console.log('User Signed In Successfully');
    return userInfo;
  } catch (error) {
    console.log('Google Sign In >>>>>>>', error);
    return null;
  }
};
