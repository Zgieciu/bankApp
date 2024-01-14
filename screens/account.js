import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AccountsContext from '../components/accountsContext';
import { AccSensor } from '../components/accSensor';
import { bgColor, textColor } from '../styles/styles';

export default Account = ({ navigation }) => {
    const { accountBalance, activeAccount } = useContext(AccountsContext);

    const goToPaymentHistory = () => navigation.navigate('PaymentHistory');
    const goToCards = () => navigation.navigate('Cards');
    const goToCurrencies = () => navigation.navigate('Currencies');

    return (
        <View style={styles.container}>
            <AccSensor navigation={navigation} />
            <Text style={styles.textHeader}>Stan konta: </Text>
            <Text style={styles.text}>
                {accountBalance([...activeAccount.movements])} zł
            </Text>
            <TouchableOpacity onPress={goToPaymentHistory}>
                <Text style={styles.links}>Pokaż historię transakcji</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={goToCards}>
                <Text style={styles.links}>Pokaż karty</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={goToCurrencies}>
                <Text style={styles.links}>Pokaż waluty</Text>
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