import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableWithoutFeedback, Keyboard, Modal, FlatList, TouchableOpacity, TouchableHighlight } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import CreateTask from './createTask';
import { Swipeable } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import Swipeable from 'react-native-swipeable';

export default function Todos() {
  const [modalOpen, setModalOpen] = useState(false);
  const [todos, setTodos] = useState([]);
  const [saveData, setSaveData] = useState(false);
  const [swipedRow, setSwipedRow] = useState(null);

  const addTodoToList = (todo) => {
    console.log('=============================')
    todo.key = Math.random().toString();
    setTodos((currentTodos) => {
      return [todo, ...currentTodos];
    });
    setModalOpen(false);
  };

  const rightAction = () => {
    return (
      <View style={styles.rightAction}>
        <Text style={styles.actionText}>Completed</Text>
      </View>
    )
  }

  const save = async (item) => {
    console.log("saving");
    try {
      await AsyncStorage.setItem("MyName", JSON.stringify(item));
    } catch (err) {
      alert(err);
    }
  };

  const leftContent = <Text>Pull to activate</Text>;

  const rightButtons = [
    <TouchableHighlight><TouchableOpacity onPress={() => save(item)}>Completed</TouchableOpacity></TouchableHighlight>
  ];


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Todos</Text>
        <View style={styles.circular}></View>
      </View>


      <FlatList data={todos} renderItem={({ item }) => (
        <Swipeable
          renderRightActions={rightAction}
          openRight={save(item)}
        >
          <View style={styles.todos}>
            <Text>{item.title}</Text>
          </View>
          <Text>   </Text>
        </Swipeable>
      )} />



      <Modal visible={modalOpen} animationType='slide'>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons
              name='close'
              size={24}
              style={{ ...styles.modalToggle, ...styles.modalClose }}
              onPress={() => setModalOpen(false)}
            />
            <CreateTask addTodoToList={addTodoToList} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <View
        name="title"
        size={200}
        backgroundColor = '#000000'
        style={styles.modalToggle}
        onClick={() => setModalOpen(true)}
      />

      {/* <MaterialIcons
        name="add"
        size={24}
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)}
      /> */}



    </View>
  )

};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#99ccff',
  },
  header: {
    backgroundColor: '#cc0000',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 15,
  },
  circular: {
    width: 40,
    height: 40,
    borderColor: '#55BCF6',
    borderWidth: 3,
    borderRadius: 50,
  },
  body: {},
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},
  modalToggle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 20,
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
  todos: {
    backgroundColor: 'white',
    padding: 7,
    flexDirection: 'row',
  },
  rightAction: {
    backgroundColor: '#cc0000',
    justifyContent: 'center',
    flex: 1,
  },
  actionText: {
    color: '#fff',
    padding: 7,
  },
});
