import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { Formik } from 'formik';

export default function CreateTask({ addTodoToList }) {
    return (
        <View style={styles.container}>
            <Formik
                initialValues={{ title: '', assignee: '', date: '' }}
                onSubmit={(values, actions) => {
                    console.log(values);
                    actions.resetForm(); 
                    addTodoToList(values);
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