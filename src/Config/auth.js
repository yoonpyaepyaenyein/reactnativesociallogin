import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {LoginButton, AccessToken, LoginManager} from 'react-native-fbsdk-next';

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

export const _signInWithFacebook = async () => {
  try {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccessToken
    const data = await AccessToken.getCurrentAccessToken();
    console.log('data >>>', data)

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );

    // Sign-in the user with the credential
    const userinfo = auth().signInWithCredential(facebookCredential);
    console.log('User Signed In Successfully');
    return userinfo;
  } catch (error) {
    console.log('FACEBOOK Sign In >>>', error);
  }
};
