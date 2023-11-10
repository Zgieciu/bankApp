import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AccountsContext } from '../App';

export default Login = () => {
    const { activeAccount } = useContext(AccountsContext);

    return (
        <View style={styles.container}>
            <Text>Login: {activeAccount.login}</Text>
            <Text>Hasło: {activeAccount.password}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
})