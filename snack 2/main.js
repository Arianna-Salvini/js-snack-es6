console.log('Snack 2');

//// SNACK 2 ////

// A partire da un array di stringhe
// Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]

const disneyCharacter = ['pippo', 'PLUTO', 'Paperino']
console.log(disneyCharacter);

// crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.

// const nameLowerCase = disneyCharacter.map(name => {
//  return name.toLowerCase();
// });

// console.log(nameLowerCase);

// const formattedName = nameLowerCase.map(name => {
//     return name.charAt(0).toUpperCase() + name.slice(1)
// })

// console.log(formattedName);

// const nameLowerCase = disneyCharacter.map(name => {
//     return name.toLowerCase();
//    });
   
//    console.log(nameLowerCase);
   
   const formattedName = disneyCharacter.map(name => {
       return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
   })
   
   console.log(formattedName);