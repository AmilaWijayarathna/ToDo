/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';
import React, { useEffect, useState } from 'react';

import Authentication from './screens/Authentication';
import Authenticated from './screens/Authenticated';
import Navigator from './routes/AppNavigator';


export default function App() {

  const [authenticated, setAuthenticated] = useState(false);

  

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '1074726529303-tshl8a2gkqg4iqle0pjv0frf8oivci3s.apps.googleusercontent.com',
    });
  }, []);

  async function onGoogleButtonPress() {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  auth().onAuthStateChanged((user) => {
    if (user) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  });

  if (authenticated) {
    return <Navigator />;
  }

  return < Navigator onGoogleButtonPress={onGoogleButtonPress} />;
}
