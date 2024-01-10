import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, Alert, ScrollView } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import CountryFlag from 'react-native-country-flag';
import AccountsContext from '../components/accountsContext';
import { putAccount } from '../data/accountsData';
import { bgColor, textColor } from '../styles/styles';

const currencyBuy = [
    { label: 'EUR', value: '4.45', isoCode: 'EU' },
    { label: 'USD', value: '4.16', isoCode: 'US' },
    { label: 'GBP', value: '5.11', isoCode: 'GB' },
    { label: 'CHF', value: '4.61', isoCode: 'CH' },
    { label: 'AED', value: '1.12', isoCode: 'AE' },
    { label: 'AUD', value: '2.68', isoCode: 'AU' },
];

export default Cantor = () => {
    const [amount, setAmount] = useState('');
    const [checkedIndex, setCheckedIndex] = useState(-1);
    const [isChecked, setIsChecked] = useState(false);
    const [selectedCurrency, setSelectedCurrency] = useState('');
    const { accountBalance, activeAccount } = useContext(AccountsContext);

    const onChangeAmount = text => setAmount(text);

    const handleCurrencySelect = (currency, index) => {
        if (!isChecked && selectedCurrency === '') {
            setSelectedCurrency(currency);
            setIsChecked(true);
            setCheckedIndex(index);
            return;
        }

        if (isChecked && selectedCurrency === currency) {
            setSelectedCurrency('');
            setIsChecked(false);
            setCheckedIndex(-1);
            return;
        }
    };

    const handleExchange = (type) => {
        if (selectedCurrency === '' || !amount) {
            Alert.alert('Wystąpił błąd', 'Wybierz walutę i wprowadź kwotę do wymiany');
            return;
        }

        const data = parseFloat(parseFloat(amount).toFixed(2));

        const currencyInfo = currencyBuy.find(
            (item) => item.label === selectedCurrency
        );

        const exchangedAmount = parseFloat((data * parseFloat(currencyInfo.value)).toFixed(2));

        if (type) handleExchangeBuy(exchangedAmount, data);
        if (!type) handleExchangeSell(exchangedAmount, data);
    }

    const handleExchangeBuy = (exchangedAmount, data) => {
        if (exchangedAmount > accountBalance([...activeAccount.movements])) {
            Alert.alert('Wystąpił błąd', 'Saldo jest niewystarczające');
            return;
        }

        activeAccount.movements.push(-exchangedAmount);
        const prevCurriency = parseFloat(activeAccount.currencies[selectedCurrency]);
        activeAccount.currencies[selectedCurrency] = prevCurriency + data;

        putAccount(activeAccount);
        setAmount('');

        const message = `Kupiłeś: ${amount} ${selectedCurrency} za ${exchangedAmount.toFixed(2)} PLN`;
        Alert.alert(message);
    };

    const handleExchangeSell = (exchangedAmount, data) => {
        if (parseFloat(amount) > activeAccount.currencies[selectedCurrency]) {
            Alert.alert('Wystąpił błąd', 'Niewystarczająca ilość waluty');
            return;
        }

        activeAccount.movements.push(exchangedAmount);
        const prevCurriency = parseFloat(activeAccount.currencies[selectedCurrency]);
        activeAccount.currencies[selectedCurrency] = prevCurriency - data;

        putAccount(activeAccount);
        setAmount('');

        const message = `Sprzedałeś: ${amount} ${selectedCurrency} za ${exchangedAmount.toFixed(2)} PLN`;
        Alert.alert(message);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>
                Saldo: {accountBalance([...activeAccount.movements])} zł
            </Text>
            <View>
                <Input
                    changeFunction={onChangeAmount}
                    text='Kwota do wymiany'
                    type='numeric'
                    value={amount}
                />
            </View>
            <View style={styles.currenciesContainer}>
                {currencyBuy.map((item, index) => (
                    <View key={index}>
                        <View style={styles.currencies}>
                            <BouncyCheckbox
                                style={isChecked && index !== checkedIndex && { display: 'none' }}
                                isChecked={isChecked}
                                fillColor='blue'
                                onPress={() => handleCurrencySelect(item.label, index)}
                            />
                            <Text style={[styles.shortcut, { fontWeight: 'bold', fontSize: 20 }]}>
                                <CountryFlag isoCode={item.isoCode} size={25} /> {item.label} ({item.value})
                            </Text>
                        </View>
                    </View>
                ))}
                <View style={styles.btnContainer}>
                    <Btn text='Kupuję' btnFunction={() => handleExchange(true)} />
                    <Btn text='Sprzedaję' btnFunction={() => handleExchange(false)} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: bgColor,
        paddingTop: 10,
        paddingBottom: 10,
    },
    header: {
        paddingTop: 10,
        fontSize: 30,
        color: textColor,
    },
    btnContainer: {
        flexDirection: 'row',
    },
    currenciesContainer: {
        flex: 1,
        alignItems: 'center',
        margin: 20,
    },
    currencies: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
    },
    shortcut: {
        marginLeft: 10,
        color: textColor,
    },
});