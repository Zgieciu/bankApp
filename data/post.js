import ip from './ip';

export default getAccounts = (setAccounts) => {
    setAccounts([]);
    fetch(`http://${ip}/accounts`, { method: 'GET' })
        .then((response) => response.json())
        .then((data) => data.map(account => setAccounts((prev => [...prev, account]))))
        .catch((error) => console.log(error))
}