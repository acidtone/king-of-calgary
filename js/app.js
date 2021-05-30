import {rollDie, rollDice, mapDiceRolls} from './utilities.js'

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


  const resolveDice = function(){

    // Disable rolling
    rollBtn.disabled = true;

    // TODO: hide unneeded sections

    // If any remaining dice, keep them
    const remainingDice =  rollPile.querySelectorAll('li');
    if (remainingDice.length > 0) {
      remainingDice.forEach(function(item) {
        keepPile.appendChild(item);
      });
    }
    
    // Get values from dice
    const keptDice = keepPile.querySelectorAll('button');
    const keptDiceVals = [];

    for(let dieVal of keptDice){
      keptDiceVals.push(dieVal.innerHTML);
    }

    // Create a map of the rolled values
    const rollMap = mapDiceRolls(keptDiceVals);
    console.log(rollMap);

    // Add map values (TODO: in own section?)
    let keptValuesDisplay = '';
    for(let faceValue in rollMap){
        keptValuesDisplay += `<li><button>${faceValue}${rollMap[faceValue]}</button></li>` //??
    }
    rollPile.innerHTML = keptValuesDisplay; //TODO: shouldn't be rollPile, need own section

    resolveBtn.disabled = true;

  }



  const rollBtn = document.querySelector('.roll-dice');
  const resolveBtn = document.querySelector('.resolve-dice');
  const rollPile = document.querySelector('.roll-pile ul');
  const keepPile = document.querySelector('.keep-pile ul');

  let rollCount = 0;

  resolveBtn.disabled = true; // disable by default

  rollBtn.addEventListener('click', function() {
    resolveBtn.disabled = false; // enable resolve after first roll

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
      resolveDice();
    }

  })

  resolveBtn.addEventListener('click', resolveDice)
    
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