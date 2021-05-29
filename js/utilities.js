export const rollDie = function(die) {
  // Die -> array
  const randArrayItem = die[Math.floor(Math.random() * die.length)];
  return randArrayItem;
}

export const rollDice = function(numDie = 1, die = [1,2,3,4,5,6]) {
  const roll = [];

  for (let i = 0; i < numDie; i++) {
    roll[roll.length] = rollDie(die);
  }

  return roll;
}

