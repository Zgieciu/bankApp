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

  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor="#000"
        barStyle="light-content"
      />
      <AccountsContext.Provider value={{ accounts, activeAccount, setActiveAccount }}>
        <StackNavigation />
      </AccountsContext.Provider>
    </NavigationContainer >
  );
}