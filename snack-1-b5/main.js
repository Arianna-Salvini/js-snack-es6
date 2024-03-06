console.log('Snack 5');

// Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.

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


// Calcola quanto pesano tutte le zucchine.
let totalWeight = 0

zucchinis.forEach(zucchini => {
    totalWeight += zucchini.weightKg 
})

console.log(totalWeight);
