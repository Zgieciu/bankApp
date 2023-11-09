import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AccountsContext } from '../App';

export default Login = () => {
    return (
        <View style={styles.container}>
            <AccountsContext.Consumer>
                {accounts => accounts.map((account) => (
                    <Text key={account.id}>{account.login}</Text>
                ))}
            </AccountsContext.Consumer>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
})