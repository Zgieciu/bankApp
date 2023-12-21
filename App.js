import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import AccountsContext from './components/accountsContext';
import StackNavigation from './components/stackNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { getAccounts } from './data/accountsData';

export default function App() {

  const [accounts, setAccounts] = useState([]);
  const [activeAccount, setActiveAccount] = useState({});
  const [cards, setCards] = useState({});

  useEffect(() => {
    getAccounts(setAccounts);
  }, [])

  const accountBalance = movements => (movements.reduce((acc, cur) => acc + cur)).toFixed(2);

  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor="#000"
        barStyle="light-content"
      />
      <AccountsContext.Provider value={{ accountBalance, accounts, activeAccount, cards, setActiveAccount, setCards }}>
        <StackNavigation />
      </AccountsContext.Provider>
    </NavigationContainer >
  );
}