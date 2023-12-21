import React, { useContext, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import AccountsContext from '../components/accountsContext';
import Btn from '../components/btn';
import Input from '../components/input';
import { putAccount } from '../data/accountsData';
import { bgColor, textColor } from '../styles/styles';

export default Loan = () => {

    const { accountBalance, activeAccount } = useContext(AccountsContext);

    const [loan, setLoan] = useState();
    const [payLoan, setPayLoan] = useState();

    const handleLoanChange = text => setLoan(text);
    const handlePayLoanChange = text => setPayLoan(text);

    const handleGetLoanCheck = () => {
        if (loan > accountBalance([...activeAccount.movements]) / 2) {
            Alert.alert("Wystąpił błąd", "Nie można udzielić pożyczki większej niż połowa kwoty posiadanej na koncie")
            return false
        }

        if (activeAccount.loan > 0) {
            Alert.alert("Wystąpił błąd", `Nie można udzielić kolejnej pożyczki. Najpierw spłać aktualną pożyczkę. Pozostała kwota to: ${activeAccount.loan} zł`)
            return false
        }

        if (isNaN(loan)) {
            Alert.alert('Wystąpił błąd', 'Pole z pożyczką nie zostało wypełnione');
            return false;
        }

        if (loan < 100) {
            Alert.alert('Wystąpił błąd', 'Minimalna kwota pożyczki to 100 zł');
            return false;
        }

        return true
    }

    const handlePayLoanCheck = () => {
        if (activeAccount.loan === 0) {
            Alert.alert("Wystąpił błąd", "Nie posiadasz aktualnie żadnej pożyczki do spłaty");
            return false;
        }

        if (activeAccount.loan < payLoan) {
            Alert.alert("Wystąpił błąd", `Kwota spłaty nie może być większa od pozostałej należności. Pozostało do spłaty: ${activeAccount.loan}`);
            return false;
        }

        if (isNaN(payLoan)) {
            Alert.alert('Wystąpił błąd', 'Pole ze spłatą nie zostałe wypełnione');
            return false;
        }

        if (payLoan < 10) {
            Alert.alert('Wystąpił błąd', 'Minimalna kwota spłaty to 10 zł');
            return false;
        }

        return true;
    }

    const handleGetLoan = () => {
        const condition = handleGetLoanCheck();
        const data = parseFloat(parseFloat(loan).toFixed(2));

        if (condition) {
            activeAccount.movements.push(data);
            activeAccount.loan = data;

            putAccount(activeAccount);

            setLoan('');
        }
    }

    const handlePayLoan = () => {
        const condition = handlePayLoanCheck();
        const data = parseFloat(parseFloat(payLoan).toFixed(2));

        if (condition) {
            activeAccount.movements.push(-data)
            activeAccount.loan -= data;

            if (activeAccount.loan === 0)
                Alert.alert("Powodzenie spłaty", "Cała pożyczka została spłacona");
            else
                Alert.alert("Powodzenie spłaty", `Spłata przyznana, pozostało: ${activeAccount.loan}`);

            console.log(activeAccount);

            setPayLoan('');
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Pożyczka</Text>
            <Input
                changeFunction={handleLoanChange}
                text='Wartość pożyczki'
                type='numeric'
                value={loan}
            />
            <Btn text='Weź pożyczkę' btnFunction={handleGetLoan} />
            <Text style={styles.text}>Spłata pożyczki</Text>
            <Input
                changeFunction={handlePayLoanChange}
                text='Wartość spłaty'
                type='numeric'
                value={payLoan}
            />
            <Btn text='Spłać pożyczkę' btnFunction={handlePayLoan} />
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