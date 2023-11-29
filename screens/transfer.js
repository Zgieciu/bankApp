import React, { useContext, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import Btn from '../components/btn';
import Input from '../components/input';
import { AccountsContext } from '../App';
import { bgColor, textColor } from '../styles/styles';

export default Transfer = () => {

    const [accountNumber, setAccountNumber] = useState();
    const [amount, setAmount] = useState();

    const { accountBalance, accounts, activeAccount, setActiveAccount } = useContext(AccountsContext);

    const handleTransfer = () => {
        const account = accounts.find(acc => acc.accountNumber === accountNumber);
        const data = parseFloat(amount);
        if (!account) {
            Alert.alert('Wystąpił błąd', 'Konto o podanym numerze nie istnieje.');
            return 0;
        }

        if (data > accountBalance(activeAccount.movements)) {
            Alert.alert('Wystąpił błąd', 'Nie masz wystarczającej ilości środków na koncie.');
            return 0;
        }

        if (data < 1) {
            Alert.alert('Wystąpił błąd', 'Minimalna kwota przelewy to 1 zł');
            return 0;
        }
        activeAccount.movements.push(-data);
        account.movements.push(data);
        setAccountNumber('');
        setAmount('');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Numer konta:</Text>
            <Input
                changeFunction={setAccountNumber}
                text='Podaj numer konta'
                type='numeric'
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