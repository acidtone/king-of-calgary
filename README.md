# King of New York
## Terminology
Heart

## Things
- Dice
  - 6 sides
    1. Heart
        - Add 1 to Health Metre
    2. Star
        - Add 1 to VP Metre
        - Only available to Super Star card holder
    3. Energy
        - Add 1 to Money
    4. Claw
        - Add 1 to Attack Damage
    5. Building
        - Add 1 to Stomp
    6. Skull
        - Add 1 to Skull Metre
        - 1 Skull: Borough Armies attack Player
        - 2 Skulls: Borough Armies attack all Players in current Borough
        - 3 Skulls:
            - All Borough Armies attack all Players in respective Boroughs
            - Gain Statue of Liberty
  - roll sequence
    1. Roll 5 dice
    2. Keep 0-5 OR Resolve
    3. Roll leftovers
    4. Keep 0-x dice OR Resolve
    5. Roll leftovers
    6. Resolve roll
  - Individual die rolls need to be discrete
  - Turn state
    - Roll pile
    - Keep pile
  - Two extra dice tied to [two Deck cards]
  - Rerolls optional (unless [Deck card] in play)
  - Resolve
    - Order matters
    - Each die side must be resolved at once
- Deck
  - Cards change the rules -> hard problem to solve
  - TODO: find low-hanging fruit
  - Tied directly to economy
    - Card cost -> Energy
  - Bought cards -> Player state
- Economy (Energy)
  - Current energy -> Player state
- Counters
  - Win condition counters -> Player state
    - Health
    - VP
- Fancy cards
  - Superstar
    - gained: resolved 3 Stars
      - 1 VP when card gained plus 1 VP for every additional Star
    - benefits
      - "While you have this card, you gain 1 VP for each Star you roll"
  - Statue of Liberty
    - gained: resolved 3 Skulls
    - benefits
      - Gain 3 VP when you take this card
      - Lose 3 VP when you lose this card
- Win conditions
  - Last monster standing, OR
  - First to 20 Stars

## Attributions/Inspiration
- [Yahtzee! .JS](https://github.com/peippo/yahtzee/tree/master/js)
