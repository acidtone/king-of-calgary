import {rollDie, rollDice} from './utilities.js'

const init = function() {
  const die = [
    {
      label: 'heart',
      svg: '',
      effect: 'Add 1 to Health Metre'
    },
    {
      label: 'star',
      svg: '',
      effect: 'Add 1 to VP Metre'
    },
    {
      label: 'energy',
      svg: '',
      effect: 'Add 1 to Money'
    },
    {
      label: 'claw',
      svg: '',
      effect: 'Add 1 to Attack Damage'
    },
    {
      label: 'building',
      svg: '',
      effect: 'Add 1 to Stomp'
    },
    {
      label: 'skull',
      svg: '',
      effect: 'Add 1 to Ouch'
    }
  ];

  const moveDie = function(event){
    if (event.target.parentNode.parentNode.parentNode.classList.contains('roll-pile')) {
      keepPile.appendChild(event.target.parentNode);
    } else if (event.target.parentNode.parentNode.parentNode.classList.contains('keep-pile')) {
      rollPile.appendChild(event.target.parentNode);
    }
    // console.log(event);
  
    // Remove dom item from .roll-pile
    // Add dom item to .keep-pile
  }

  const moveRemainingDice = function() {
    rollPile.querySelectorAll('li').forEach(function(item) {
      keepPile.appendChild(item);
    });
  }

  const rollBtn = document.querySelector('.roll-dice');
  const resolveBtn = document.querySelector('.resolve-dice');
  const rollPile = document.querySelector('.roll-pile ul');
  const keepPile = document.querySelector('.keep-pile ul');

  let rollCount = 0;

  rollBtn.addEventListener('click', function() {
    const numDie = 6 - keepPile.querySelectorAll('li').length;

    const result = rollDice(numDie, die);
    
    rollCount++;

    if (rollCount <= 3) {

      let listItems = '';
      result.forEach(function(item){
        listItems += `<li><button>${item.label}</button></li>`;
      })
      
      rollPile.innerHTML = listItems;
      console.log(rollPile);
      rollPile.querySelectorAll('button').forEach(function(item){
        item.addEventListener('click', moveDie);
        item.classList.add('die');
      });
      
    } else {
      moveRemainingDice();
    }
    // Increment rollCounter
    
  })

  resolveBtn.addEventListener('click', function() {
    // Disable roll
    rollBtn.disabled = true;

    // If any remaining dice, keep them
    if(rollPile.querySelectorAll('button').length > 0){
      moveRemainingDice();
    }

    // Resolve
    /**// Takes array of dice and maps out number of values per side
const mapDiceRolls = (diceArray) => {

  // First, sort all values
  const rollMap = diceArray.reduce(function (acc, curr) {
      if (typeof acc[curr] == 'undefined') {
        acc[curr] = 1;
      } else {
        acc[curr] += 1;
      }
      return acc;
    }, {});

  return rollMap;
}

const rollMap = mapDiceRolls(["CLAW", "HEART", "CLAW", "STOMP", "ENERGY", "HEART"]);
console.log(rollMap); */
  })
    
}

init();
// Roll Dice button -> onclick = rollDice
// 1. Increment roll counter (max: 2 re-rolls)
// If rollCount == 3 -> resolve

// Send result to .roll-pile as <li>

// Add onclick to each die in .roll-pile
// 1. Move die to keep-pile

// Add onclick to each die in .keep-pile
// 1. move die to roll-pile

// Resolve: deal with later