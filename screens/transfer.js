import React, { useContext, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import Btn from '../components/btn';
import Input from '../components/input';
import { AccountsContext } from '../App';
import { putAccount } from '../data/accountsData';
import { AccSensor } from '../components/accSensor';
import { bgColor, textColor } from '../styles/styles';

export default Transfer = ({ navigation }) => {

    const { accountBalance, accounts, activeAccount } = useContext(AccountsContext);

    const [accountNumber, setAccountNumber] = useState();
    const [amount, setAmount] = useState();

    const handleAccountNumberChange = text => setAccountNumber(text);
    const handleAmountChange = text => setAmount(text);

    const handleInputCheck = (account, data) => {
        if (!account) {
            Alert.alert('Wystąpił błąd', 'Konto o podanym numerze nie istnieje.');
            return false;
        }

        if (account.accountNumber === activeAccount.accountNumber) {
            Alert.alert('Wystąpił błąd', 'Nie można dokonać przelewu na swoje konto.');
            return false;
        }

        if (isNaN(data)) {
            Alert.alert('Wystąpił błąd', 'Pole z kwotą nie zostało wypełnione');
            return false;
        }

        if (data > accountBalance(activeAccount.movements)) {
            Alert.alert('Wystąpił błąd', 'Nie masz wystarczającej ilości środków na koncie.');
            return false;
        }

        if (data < 1) {
            Alert.alert('Wystąpił błąd', 'Minimalna kwota przelewy to 1 zł');
            return false;
        }

        return true;
    }

    const handleTransfer = () => {
        const account = accounts.find(acc => acc.accountNumber === accountNumber);
        const data = parseFloat(parseFloat(amount).toFixed(2));

        const condition = handleInputCheck(account, data);

        if (condition) {
            activeAccount.movements.push(-data);
            account.movements.push(data);

            putAccount(activeAccount);
            putAccount(account);

            setAccountNumber('');
            setAmount('');
        }
    }

    return (
        <View style={styles.container}>
            <AccSensor navigation={navigation} />
            <Text style={styles.text}>Numer konta:</Text>
            <Input
                changeFunction={handleAccountNumberChange}
                text='Podaj numer konta'
                type='numeric'
                value={accountNumber}
            />

            <Text style={styles.text}>Kwota:</Text>
            <Input
                changeFunction={handleAmountChange}
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