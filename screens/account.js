import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AccountsContext } from '../App';
import { bgColor, textColor } from '../styles/styles';

export default Login = () => {
    const { activeAccount } = useContext(AccountsContext);

    const accountBalance = movements => (movements.reduce((acc, cur) => acc + cur)).toFixed(2);

    return (
        <View style={styles.container}>
            <Text style={styles.textHeader}>Stan konta: </Text>
            <Text style={styles.text}>
                {accountBalance([...activeAccount.movements])} zł
            </Text>
            <TouchableOpacity>
                <Text style={styles.links}>Pokaż historię transakcji</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.links}>Pokaż karty</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 30,
        backgroundColor: bgColor,
    },
    textHeader: {
        marginTop: 50,
        fontSize: 60,
        color: textColor,
    },
    text: {
        marginBottom: 80,
        fontSize: 40,
        color: textColor,
    },
    links: {
        fontSize: 30,
        marginBottom: 20,
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid',
        color: '#aaa',
    },
})