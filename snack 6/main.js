console.log('Snack 6');
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

// PF =Punti Fatti
// FS = Falli Subiti

const footballTeams = [
    {
        name: 'Milan',
        PF: 0,
        FS: 0,
    },
    {
        name: 'Juventus',
        PF: 0,
        FS: 0,
    },
    {
        name: 'Inter',
        PF: 0,
        FS: 0,
    },
    {
        name: 'Roma',
        PF: 0,
        FS: 0,
    },
    {
        name: 'Genoa',
        PF: 0,
        FS: 0,
    },

]
// console.log(footballTeams);
// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
function randomNumb(min, max) {
    return parseInt(Math.round(Math.random() * (max - min + 1)) + min);
}

// console.log(randomNumb(0, 114));
// Randomizzo i numeri per i PF e FS

footballTeams.map(team => {
    team.PF = randomNumb(0, 114);
    team.FS = randomNumb(0, 114);
})
console.log(footballTeams);

// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// const [name, , FS] = footballTeams per nuovop array escludendo il terzo elemento
// const {name,FS} = dell'elemento dell'array = nuovo array con solo 2 valori per elemento ???

const onlyTeamAndFS = footballTeams.map(team => {
    const { name, FS } = team
    return { name, FS }
})

console.log(onlyTeamAndFS);

// Scrivo il risultato nella DOM

const markUp = `  <li>
<div class="card-body p-2 border d-flex justify-content-center bg-light shadow-sm">
    <h5 class="card-title lh-1 mx-2">${footballTeams.name}</h5>
    <h6 class="card-subtitle text-muted lh-base">Falli Subiti: ${footballTeams.Fs}</h6>
</div>
</li>`