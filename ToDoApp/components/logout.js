import React from 'react';
import { StyleSheet,Button, View, Text } from 'react-native';
import auth from '@react-native-firebase/auth';

export default function Logout() {
  return (
    <View style={styles.container}>
      <Text>Log out page</Text>
      <Button title="Signout" onPress={() => auth().signOut()} />
    </View>
    
   

  )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      textAlign: 'center',
    },
  });