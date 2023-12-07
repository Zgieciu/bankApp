import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Btn from '../components/btn';
import Input from '../components/input';
import { bgColor, textColor } from '../styles/styles';

export default Loan = () => {

    const [loan, setLoan] = useState();
    const [payLoan, setPayLoan] = useState();

    const handleLoanChange = text => setLoan(text);
    const handlePayLoanChange = text => setPayLoan(text);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Pożyczka</Text>
            <Input
                changeFunction={handleLoanChange}
                text='Wartość pożyczki'
                type='numeric'
                value={loan}
            />
            <Btn text='Weź pożyczkę' />
            <Text style={styles.text}>Spłata pożyczki</Text>
            <Input
                changeFunction={handlePayLoanChange}
                text='Wartość spłaty'
                type='numeric'
                value={payLoan}
            />
            <Btn text='Spłać pożyczkę' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: bgColor,
    },
    text: {
        marginTop: 50,
        fontSize: 30,
        color: textColor,
    },
})