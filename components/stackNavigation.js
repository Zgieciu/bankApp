import React from 'react';
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import Login from '../screens/login';

const Stack = createStackNavigator();

export default StackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    header: {
        padding: 20,
        backgroundColor: 'darkblue',
    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#fff',
    },
})