import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Todos from '../components/todos';
import DoneTasks from '../components/doneTasks';
import Logout from '../components/logout';
import CreateTask from '../components/createTask';

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()


function MainTabNavigator() {
    return (
        <Tab.Navigator 
            tabBarOptions={{
                activeTintColor: '#cc0000',
                style: {
                    backgroundColor: '#ffffff'
                },
                labelStyle: {
                    fontSize: 17,
                },
            }}>
                <Tab.Screen name="Todos" component={Todos} />
                <Tab.Screen name="DoneTasks" component={DoneTasks} />
                <Tab.Screen name="Logout" component={Logout} />
      
        </Tab.Navigator>
    )
}


function MainStackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen name="Todos" component={MainTabNavigator} />
                <Stack.Screen name="CreateTask" component={CreateTask} />

            </Stack.Navigator>
        </NavigationContainer>
    )
  }
  
export default MainStackNavigator
