import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import StackNavigation from './components/stackNavigation';
import { NavigationContainer } from '@react-navigation/native';
import getAccounts from './data/post';

export default function App() {

    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        getAccounts(setAccounts);
    }, [])

    return (
        <NavigationContainer>
            <StatusBar
                backgroundColor="#000"
                barStyle="light-content"
            />
            <StackNavigation />
        </NavigationContainer>
    );
}