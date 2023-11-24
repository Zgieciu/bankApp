import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Btn from '../components/btn';
import Input from '../components/input';
import { bgColor, textColor } from '../styles/styles';

export default Transfer = () => {

    const [accountNumber, setAccountNumber] = useState();
    const [amount, setAmount] = useState();

    const handleTransfer = () => console.log('działa');

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Numer konta:</Text>
            <Input
                changeFunction={setAccountNumber}
                text='Podaj numer konta'
                value={accountNumber}
            />

            <Text style={styles.text}>Kwota:</Text>
            <Input
                changeFunction={setAmount}
                text='Podaj kwotę'
                type='numeric'
                value={amount}
            />

            <View style={{ marginTop: 70 }}>
                <Btn text='Wykonaj przelew' btnFunction={handleTransfer} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 50,
        backgroundColor: bgColor,
    },
    text: {
        marginTop: 20,
        fontSize: 30,
        color: textColor,
    },
})