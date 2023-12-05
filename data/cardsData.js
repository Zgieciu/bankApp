import ip from './ip';

export const getCards = (setCards, id) => {
    setCards([]);
    fetch(`http://${ip}/cards?accountId=${id}`, { method: 'GET' })
        .then(res => res.json())
        .then(data => data.map(card => setCards(prev => [...prev, card])))
        .catch(error => console.log(error))
}

export const postCard = card => {
    const options = {
        method: 'POST',
        body: JSON.stringify(card),
        headers: {
            "Content-Type": "application/json",
        }
    }

    fetch(`http://${ip}/cards`, options)
        .then(res => res.json())
        .then(card => console.log('Nowa karta została dodana'))
        .catch(err => console.error(err));
}