import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Cards from '../screens/cards';
import Currencies from '../screens/currencies';
import Home from '../screens/home';
import Login from '../screens/login';
import PaymentHistory from '../screens/paymentHistory';
import TabNavigation from './tabNavigation';
import { lightBgColor, mainColor, textColor, } from '../styles/styles';

const Stack = createStackNavigator();

const screenOptions = {
    headerStyle: {
        backgroundColor: mainColor,
    },
    headerTitleStyle: {
        fontSize: 30,
        color: textColor,
    },
    headerTintColor: textColor,
}

export default StackNavigation = () => {
    const logout = (navigation) => navigation.navigate('Home');

    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name='Home' component={Home} options={{
                title: 'Strona główna',
            }} />
            <Stack.Screen name='Login' component={Login} options={{
                title: 'Logowanie',
            }} />
            <Stack.Screen name='TabNavigation' component={TabNavigation} options={({ navigation }) => ({
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
            <Stack.Screen name='PaymentHistory' component={PaymentHistory} options={{
                title: 'Historia płatności',
            }} />
            <Stack.Screen name='Cards' component={Cards} options={{
                title: 'Karty',
            }} />
            <Stack.Screen name='Currencies' component={Currencies} options={{
                title: 'Waluty',
            }} />
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
        backgroundColor: lightBgColor,
    },
    buttonText: {
        fontSize: 20,
        color: textColor,
    },
})