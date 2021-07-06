import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function FirstPage({ navigation }) {

  return (
    <View style={styles.container}>
      <Button
        title="Sign In Page"
        onPress={() => navigation.navigate('SignIn')} 
      />

      <Button
        title="Sign Up Page"
        onPress={() => navigation.navigate('SignUp')} 
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  });

