import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function SignUp({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Sign Up Page</Text>
      <Button
        title="Todos"
        onPress={() => navigation.navigate('Todos')} 
      />
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });