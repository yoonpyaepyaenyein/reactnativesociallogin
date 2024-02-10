import {GoogleSignin} from '@react-native-google-signin/google-signin';
import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const HomeScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    //auth().onAuthStateChanged().
    //This function listens for changes in the user's authentication state.
    //If a user is already signed in, it updates the email and user state variables accordingly.
    // If no user is signed in, it navigates to the authentication screen using the navigation.navigate("Auth") method.
    const unsubscribe = auth().onAuthStateChanged(user => {
      if (user) {
        // User is signed in => Get user info and stay on the Home Screen
        setEmail(user.email);
        setUser(user);
      } else {
        // No user is signed in => Navigate to the Authentication Screen
        console.log('No user is signed in return to Home screen');
        navigation.navigate('Auth');
      }
    });
  }, []);

  const googleSignOut = async () => {
    try {
      await GoogleSignin.signOut();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={'#ddd'}
        barStyle={'dark-content'}
        animated={true}
      />
      <Text style={styles.text}>Already Logged In</Text>
      <Text style={styles.text}> Welcome `{email}` </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => googleSignOut().then(() => navigation.navigate('Auth'))}>
        <Text style={styles.text}>LOGOUT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddd',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
    paddingHorizontal: 16,
    margin: 6,
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#33B6FF',
    width: '50%',
    marginTop: 30,
  },
});
