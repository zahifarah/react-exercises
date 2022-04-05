## Wordle Rules & Requirements

Concepts:
<> Active Row
<> Active Column

### <Board />

When you press enter, you see the status of your last guess:

- Five characters per row
- On Guess (on keyboard enter + digital keyboard enter):
  - Incorrect letter = ⚫️
  - Correct letter + wrong position = 🟡
  - Correct guesses + correct position = 🟢
  - Shake the active row if word is NOT in list of words ❌
  - Letters rotate + change background from black to gray

### <Keyboard />

Reflects Board knowledge (another source for same info). Convenient for humans.

- You see past attempts
- You see current attempt (obviously)
- If you make more than 6 attempts you lose
- Third row is enter [...] backspace
- You can still type by typing

### Initial visual state

- All rows empty
- As I fill out my guess, background is black
- Filled out cells have slight border highlight
