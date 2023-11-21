import React, { useContext } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { AccountsContext } from '../App';
import Card from '../components/card';
import { bgColor } from '../styles/styles';

export default Cards = () => {
    const { cards } = useContext(AccountsContext);

    return (
        <View style={styles.container}>
            <ScrollView>
                {cards.map((card, index) =>
                    <Card
                        number={card.cardNumber}
                        date={card.date}
                        key={index}
                    />)}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: bgColor,
    },
})