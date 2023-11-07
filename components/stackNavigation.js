import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Account from '../screens/account';
import Home from '../screens/home';
import Login from '../screens/login';

const Stack = createStackNavigator();

const screenOptions = {
    headerStyle: {
        backgroundColor: 'darkblue',
    },
    headerTitleStyle: {
        fontSize: 30,
        color: '#fff',
    },
    headerTintColor: '#fff',
}

export default StackNavigation = () => {
    const logout = (navigation) => navigation.navigate('Home');


    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name="Home" component={Home} options={{
                title: 'Strona główna',
            }} />
            <Stack.Screen name="Login" component={Login} options={{
                title: 'Logowanie',
            }} />
            <Stack.Screen name="Account" component={Account} options={({ navigation }) => ({
                title: 'Konto',
                headerLeft: () => null,
                headerRight: () => {
                    return (
                        <TouchableOpacity style={styles.button} onPress={() => logout(navigation)}>
                            <Text style={styles.buttonText}>Wyloguj sie</Text>
                        </TouchableOpacity>
                    )
                }
            })} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    button: {
        marginRight: 20,
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderWidth: 2,
        borderColor: '#000',
        backgroundColor: '#444',
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
    },
})