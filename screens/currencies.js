import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { AccountsContext } from '../App';
import Currency from '../components/currency';
import { bgColor } from '../styles/styles';

export default Currencies = () => {
    const { activeAccount } = useContext(AccountsContext);

    return (
        <View style={styles.container}>
            {Object.entries(activeAccount.currencies).map(([currency, value]) => (
                <Currency currency={currency} value={value} />
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 40,
        backgroundColor: bgColor,
    },
})