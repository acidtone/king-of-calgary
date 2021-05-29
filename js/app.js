import {rollDie, rollDice} from './utilities.js'

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
console.log(rollDice(6, die));