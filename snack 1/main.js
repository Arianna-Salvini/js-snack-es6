console.log('Snack 1');

//// SNACK 1 ////
// Crea un array composto da 10 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
const cars = [
    {
        marca: 'Ferrari',
        modello: 'LaFerrari',
        alimentazione: 'benzina'
    },
    {
        marca: 'Porshe',
        modello: '911 GT3 RS',
        alimentazione: 'diesel'
    },
    {
        marca: 'Lamborghini',
        modello: 'Avendor',
        alimentazione: 'gpl'
    },
    {
        marca: 'MaLaren',
        modello: 'P1',
        alimentazione: 'ibrida'
    },
    {
        marca: 'Bugatti',
        modello: 'Chiron',
        alimentazione: 'gpl'
    },
    {
        marca: 'Koenigsegg',
        modello: 'Regera',
        alimentazione: 'ibrida'
    },
    {
        marca: 'Pagani',
        modello: 'Huayra BC',
        alimentazione: 'diesel'
    },
    {
        marca: 'Aston Martin',
        modello: 'Vulcan',
        alimentazione: 'elettrico'
    },
    {
        marca: 'Ford',
        modello: 'GT',
        alimentazione: 'elettrico'
    },
    {
        marca: 'Hennessey',
        modello: 'Venom F5',
        alimentazione: 'benzina'
    }
]

// console.log(cars);
// Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
// Infine stampa separatamente i 3 array.
const benzina = cars.filter(cars => cars.alimentazione === 'benzina')
console.log(benzina)

// const carsBenzina = cars.filter( cars => cars.alimentazione === 'benzina')
// console.log(carsBenzina);

const diesel = cars.filter(cars => cars.alimentazione === 'diesel')
console.log(diesel);

const otherType = cars.filter(cars => cars.alimentazione !== 'benzina' && cars.alimentazione !== 'diesel')
console.log(otherType);
