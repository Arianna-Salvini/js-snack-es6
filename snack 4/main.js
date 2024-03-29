console.log('Snack 4');
// #### SNACK 4

// Crea un array di oggetti che rappresentano delle persone.
// Ogni persona ha un nome, un cognome e un’età.


const people = [
    {
        name: 'Harry',
        surname: 'Potter',
        age: 44,
    },
    {
        name: 'Grogu',
        surname: 'Djarin',
        age: 12,
    },
    {
        name: 'Din',
        surname: 'Djarin',
        age: 35,
    },
    {
        name: 'Minerva',
        surname: 'McGonagall',
        age: 95,
    },
    {
        name: 'Ahsoka',
        surname: 'Tano',
        age: 16,
    },
]

// Crea quindi un nuovo array inserendo, per ogni persona, 
// una frase con il nome e cognome e l’indicazione se può guidare, 
// in base all’età.

// const drivingEligible = people.map(person => {
//     if (person.age >= 18 && person.age <= 80) {
//         return `${person.name} Può guidare`
//     } else {
//         return `${person.name} Non Può guidare`

//     }
// })

// console.log(drivingEligible);

function drivingAge(age) {
    if (age >= 18 && age <= 80) {
        return 'Può guidare'
    } else {
        return 'Non Può guidare'
    }
}

const drivingEligible = people.map(person => {
    return person.name + ' ' + person.surname + ' ' + drivingAge(person.age);
});

console.log(drivingEligible);


