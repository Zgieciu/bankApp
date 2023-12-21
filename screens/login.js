import React, { useContext, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import AccountsContext from '../components/accountsContext';
import Btn from '../components/btn';
import Input from '../components/input';
import { getCards } from '../data/cardsData';
import { bgColor, textColor, } from '../styles/styles';

export default Login = ({ navigation }) => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const { accounts, setActiveAccount } = useContext(AccountsContext);
    const { setCards } = useContext(AccountsContext);

    const goToAccount = () => navigation.navigate('TabNavigation');

    const handleLoginChange = text => setLogin(text);
    const handlePasswordChange = text => setPassword(text);

    const handleLogin = () => {
        const loginCheck = accounts.find(account => account.login === login);
        if (loginCheck) {
            if (loginCheck.password === password) {
                setActiveAccount(accounts.find(account => account.id === loginCheck.id));
                getCards(setCards, loginCheck.id);
                goToAccount();
            } else {
                Alert.alert('Błąd logowania', 'Podano niepoprawne hasło, spróbuj jeszcze raz');
            }
        } else {
            Alert.alert('Błąd logowania', 'Konto o podanym loginie nie istnieje, spróbuj jeszcze raz');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Okno logowania</Text>
            <Input
                changeFunction={handleLoginChange}
                text='Login'
                value={login}
            />
            <Input
                changeFunction={handlePasswordChange}
                password={true}
                text='Hasło'
                value={password}
            />
            <Btn text='Zaloguj się' btnFunction={handleLogin} />
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
        marginTop: 150,
        fontSize: 30,
        color: textColor,
    },
})