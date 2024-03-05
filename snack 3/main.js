console.log('Sneak 3');

// Crea un array di oggetti che rappresentano degli animali.
// Ogni animale ha un nome, una famiglia e una classe.

const animals = [
    {
        nome: 'leone',
        famiglia: 'felidi',
        classe: 'mammiferi'
    },

    {
        nome: 'cane',
        famiglia: 'canidi',
        classe: 'mammiferi'
    },

    {
        nome: 'gallina',
        famiglia: 'fasianidi',
        classe: 'uccelli'
    },
]

// Crea un nuovo array con la lista dei mammiferi.

// const mammal = animals.filter(animal => {
//     if(animal.classe === 'mammiferi'){
//         return ;
//     }
// })
const mammal = animals.filter(animal => animal.classe=== 'mammiferi')
console.log(mammal);