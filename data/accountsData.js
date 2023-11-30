import ip from './ip';

export const getAccounts = setAccounts => {
    setAccounts([]);
    fetch(`http://${ip}/accounts`, { method: 'GET' })
        .then(response => response.json())
        .then(data => data.map(account => setAccounts((prev => [...prev, account]))))
        .catch(err => console.error(err))
}

export const putAccount = account => {
    fetch(`http://${ip}/accounts/${account.id}`)
        .then(response => response.json())
        .then(currentAccount => {

            const updatedAccount = {
                ...currentAccount,
                movements: account.movements,
            }

            const options = {
                method: 'PUT',
                body: JSON.stringify(updatedAccount),
                headers: {
                    "Content-Type": "application/json",
                }
            }

            fetch(`http://${ip}/accounts/${account.id}`, options)
                .then(response => response.json())
                .then(acc => console.log(`Konto zaktualizowane`))
                .catch(err => console.error(err));
        })
        .catch(err => console.error(err));
}