import React, { createContext, useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import StackNavigation from './components/stackNavigation';
import { NavigationContainer } from '@react-navigation/native';
import getAccounts from './data/accountsData';

export const AccountsContext = createContext();

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