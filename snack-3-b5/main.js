console.log('Snack 3 B5')

// Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)

// let userWord = prompt('Inserisci una parola');
let userWord = 'ciao';

function userWordRevers(word) {
    return word.split('').reverse().join('')
}

console.log(userWordRevers(userWord));