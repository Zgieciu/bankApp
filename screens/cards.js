import React, { useContext } from 'react';
import { Alert, ScrollView, StyleSheet, View } from 'react-native';
import { AccountsContext } from '../App';
import Btn from '../components/btn';
import Card from '../components/card';
import { getCards, postCard } from '../data/cardsData';
import { bgColor } from '../styles/styles';

export default Cards = () => {
    const { activeAccount, cards, setCards } = useContext(AccountsContext);

    const cardNumber = () => {
        const chars = '0123456789';
        let newCard = '';

        for (let i = 0; i < 16; i++)
            newCard += chars.charAt(Math.floor(Math.random() * chars.length));

        return newCard;
    }

    const cardDate = () => {
        const date = new Date();
        const month = date.getMonth() + 1;
        const year = date.getFullYear() + 5;

        return `${month}/${year % 100}`;
    }

    const newCard = () => {
        const card = {
            cardNumber: parseInt(cardNumber()),
            date: cardDate(),
            accountId: activeAccount.id
        }

        postCard(card)
        getCards(setCards, activeAccount.id);
    }

    const handleClick = () => {
        Alert.alert('Nowa karta', 'Czy na pewno chcesz zamówić nową kartę ?', [
            {
                text: 'Nie',
                style: 'cancel',
            },
            { text: 'Tak', onPress: () => newCard() },
        ]);
    }

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
            <View style={styles.btnContainer}>
                <Btn text={'Zamów nową karte'} btnFunction={handleClick}></Btn>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: bgColor,
    },
    btnContainer: {
        marginVertical: 30,
        marginHorizontal: 64,
    }
})