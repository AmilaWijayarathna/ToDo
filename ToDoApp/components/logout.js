import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Logout() {
  return (
    <View style={styles.container}>
      <Text>Log out page</Text>
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