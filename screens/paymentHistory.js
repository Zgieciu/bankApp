import React, { useContext } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { AccountsContext } from '../App';
import Payment from '../components/payment';
import { bgColor } from '../styles/styles';

export default PaymentHistory = () => {
    const { activeAccount } = useContext(AccountsContext);
    const movements = [...activeAccount.movements].reverse();

    return (
        <View style={styles.container}>
            <ScrollView>
                {movements.map(mov => {
                    if (mov > 0) {
                        return (
                            <Payment movType='Wpłata' mov={mov} color='green' />
                        );
                    } else {
                        return (
                            <Payment movType='Wypłata' mov={mov} color='red' />
                        );
                    }
                })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: bgColor,
    },
});