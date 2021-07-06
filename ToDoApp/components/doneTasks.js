import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, FlatList, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function DoneTasks() {
  const [completedTodos, setCompletedTodos] = useState([]);

  const load = async () => {
    try {
      let jsonvalue = await AsyncStorage.getItem("MyName");
      if (jsonvalue != null) {
        addTodoToCompletedList(JSON.parse(jsonvalue));
        // remove();
      }
    } catch (err) {
    alert(err);
  }
};

const remove = async () => {
  try {
    await AsyncStorage.removeItem("MyName");
  } catch (err) {
    alert(err);
  } finally {
    setName("");
  }
}

useEffect(() => {
  load();
}, []);

const addTodoToCompletedList = (todo) => {
  todo.key = Math.random().toString();
  setCompletedTodos((currentTodos) => {
    return [todo, ...currentTodos];
  });
};

return (
  <View style={styles.container}>
    {/* <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled'> */}
      <FlatList data={completedTodos} renderItem={({ item }) => (
        <View style={styles.todos}>
          <Text>{item.title}</Text>
          <Text>   </Text>
        </View>
      )} />
    {/* </ScrollView> */}
  </View>
)
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  todos: {
    backgroundColor: 'white',
    padding: 7,
    flexDirection: 'row',
  },
});