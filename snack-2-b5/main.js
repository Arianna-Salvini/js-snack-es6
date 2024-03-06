console.log('Snack 2 b5'); 
// Crea 10 oggetti che rappresentano una zucchina.
const zucchinis = [
    {
        variety:'Golden',
        weightKg: 2.3,
        lengthCm: 22,
    },
    {
        variety:'Romanesco',
        weightKg: 1.8,
        lengthCm: 20,
    },
    {
        variety:'Dark Green',
        weightKg: 1.5,
        lengthCm: 18,
    },
    {
        variety:'Eight BAll',
        weightKg: 0.7,
        lengthCm: 10,
    },
    {
        variety:'Costa Romanesco',
        weightKg: 2.1,
        lengthCm: 25,
    },
    {
        variety:'Cocozelle',
        weightKg: 1.2,
        lengthCm: 16,
    },
    {
        variety:'Ronde de Nice',
        weightKg: 1.0,
        lengthCm: 14,
    },
    {
        variety:'Maghreb',
        weightKg: 1.7,
        lengthCm: 21,
    },
    {
        variety:'Tromboncino',
        weightKg: 0.9,
        lengthCm: 13,
    },
    {
        variety:'Zucchetta Rampicante',
        weightKg: 1.4,
        lengthCm: 17,
    },
]
console.log(zucchinis);

// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
let zucchinisUnder15 =[]
let zucchinisOver15 =[]

// function zucchinisLenght(zucchini) {
//     if (zucchini.lengthCm >= 15) {
//      zucchinisUnder15.push(zucchini)
//     } else {
//         zucchinisOver15.push(zucchini)
//     }
// }

// zucchinis.forEach(zucchini => zucchinisLenght(zucchini));

zucchinis.map(zucchini => {
    if (zucchini.lengthCm >= 15) {
        zucchinisUnder15.push(zucchini)
       } else {
           zucchinisOver15.push(zucchini)
       }
})

console.log(zucchinisOver15);
console.log(zucchinisUnder15);

// Infine stampa separatamente quanto pesano i due gruppi di zucchine.

let totalWeightOver15= 0
let totalWeightUnder15= 0

zucchinisOver15.forEach(zucchini => {
    totalWeightOver15 += zucchini.weightKg
})
console.log(zucchinisOver15);

zucchinisOver15.forEach(zucchini => {
    totalWeightOver15 += zucchini.weightKg
})
console.log(zucchinisOver15);

zucchinisUnder15.forEach(zucchini => {
    totalWeightUnder15 += zucchini.weightKg
})
console.log(totalWeightOver15);
console.log(totalWeightUnder15);

