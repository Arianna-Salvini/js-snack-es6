console.log('Snack 5');

// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
const racingBikes = [
    {
        name:'Bianchi Oltre XR4',
        weightKg:7.2,
    },
    {
        name:'Trek Emonda SLR 9',
        weightKg:6.3,
    },
    {
        name:'Specialized Tarmac SL7',
        weightKg:7.5,
    },
    {
        name:'Cannondale SuperSix EVO',
        weightKg:7.1,
    },
    {
        name:'Pinarello Dogma F12',
        weightKg:6.8,
    },
];
// console.log(racingBike);

// Stampare in console la bici con peso minore utilizzando destructuring e template literal
// - Trovo la bici con pesso minore
let lowerWeightBike = racingBikes[0];

racingBikes.forEach(function(bike){
    if (bike.weightKg < lowerWeightBike.weightKg){
        lowerWeightBike = bike;
    };
});

// const {name, weightKg} = lowerWeightBike
const {name: bikeName, weightKg: bikeWeight} = lowerWeightBike

console.log(`The lightest bike is ${bikeName} with ${bikeWeight}Kg`)