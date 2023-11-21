import ip from './ip';

export default getCards = (setCards, id) => {
    setCards([]);
    fetch(`http://${ip}/cards?accountId=${id}`, { method: 'GET' })
        .then(res => res.json())
        .then(data => data.map(card => setCards(prev => [...prev, card])))
        .catch(error => console.log(error))
}