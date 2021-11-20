'use strict';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
//console.log(players1);
//console.log(players2);
const [gk, ...fieldPlayers] = players1;
//console.log(gk, fieldPlayers);
const allPlayers = [...players1, ...players2];
//console.log(allPlayers);
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
//console.log(players1Final);

const { team1, x: draw, team2 } = game.odds;

//console.log('team1:', draw);

const printGoals = (...obj) => {
  for (let i = 0; i < obj.length; i++) {
    //console.log(obj[i]);
  }
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

//console.log(team1 > team2 && 'Team1 Won' : 'Team2 Wom');

const goals = Object.entries(game.scored);
for (const [i, el] of goals) {
  //console.log(`Goal ${Number(i) + 1}: ${el}`);
}

const oddAverage = Object.entries(game.odds);

let oddSum = 0;
for (const oddTemp of oddAverage) {
  oddSum += Number(oddTemp);
}
//console.log(oddSum);
/*
console.log(
  `The average odds is ${parseFloat(oddSum / oddAverage.length).toFixed(2)}`
);
*/
for (const [team, odd] of oddAverage) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  //console.log(`Odd of ${teamStr} ${odd}`);
}

const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
//console.log(scorers);
/*
const roman = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10, 
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000,
};
let valFinal = 0;
const toNumeral = ([...num]) => {
  let lettersCombined = '';
  for (let i = 0; i < num.length; i++) {
    lettersCombined = num[i + 1] ? num[i] + num[i + 1] : num[i];
    if (roman[lettersCombined]) {
      valFinal += roman[lettersCombined];
      i++;
    } else {
      valFinal += roman[num[i]];
    }
  }
  return valFinal;
};

console.log(toNumeral('CMXCIX'));
*/

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

const events = new Set([...gameEvents.values()]);
//console.log(events);

gameEvents.delete(64);
//console.log(gameEvents);

/*
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
*/

for (const [key, value] of gameEvents) {
  /*
  console.log(
    Number(key) <= 45
      ? `[FIRST HALF] ${key}: ${value}`
      : `[SECOND HALF] ${key}: ${value}`
  );
  */
}

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  let rows = text.split('\n');
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20, ' ')}${'╝'.repeat(i + 1)}`);
  }
});

const nameP = 'Danilo Piovani';

console.log(nameP[0]);
