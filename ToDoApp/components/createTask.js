import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { Formik } from 'formik';
import firebase from 'firebase'
import firebaseConfig from '../FirebaseConfig'
import auth from '@react-native-firebase/auth';


export default function CreateTask({ addTodoToList }) {

    var app = null;
    // const user = auth().currentUser.userId;

    if (!firebase.apps.length) {
        console.log(firebaseConfig)
        app = firebase.initializeApp({
            apiKey: "AIzaSyArz20SuhpNar4pbZyaxgDbtRI3iYu-Fsc",
            authDomain: "todoapp-ce797.firebaseapp.com",
            databaseURL: "https://todoapp-ce797-default-rtdb.asia-southeast1.firebasedatabase.app",
            projectId: "todoapp-ce797",
            storageBucket: "todoapp-ce797.appspot.com",
            messagingSenderId: "1074726529303",
            appId: "1:1074726529303:web:6fcc6e979e502bf7ab6f52"
        });
    } else {
        app = firebase.app(); // if already initialized, use that one
    }
    const db = app.database();
    const userId = "Amila"; // need to replace auth().currentUser.userId;
    const todoRef = db.ref('/Todos/'+ userId)

    

    return (
        <View style={styles.container}>
            <Formik
                initialValues={{ title: '', assignee: '', date: '' }}
                onSubmit={(values, actions) => {
                    console.log(values);
                    actions.resetForm();
                    addTodoToList(values);

                    todoRef.push().set({
                            task: values.title,
                            name: values.assignee,
                            date: values.date,
                            isDone: false,
                        })
                        .then(() => console.log('Data set.'));
                }}
            >
                {props => (
                    <View>
                        <Text>Task title</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Task title'
                            onChangeText={props.handleChange('title')}
                            value={props.values.title}
                        />

                        <Text>Assignee</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Assignee'
                            onChangeText={props.handleChange('assignee')}
                            value={props.values.assignee}
                        />

                        <Text>Date</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Date'
                            onChangeText={props.handleChange('date')}
                            value={props.values.date}
                        />

                        <Button color='maroon' title="Submit" onPress={props.handleSubmit} />
                    </View>
                )}
            </Formik>

        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        textAlign: 'center',
    },
    header: {
        backgroundColor: '#cc0000',
        padding: 10,
        // borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    title: {
        fontSize: 23,
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
    input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: 200,
    },
});