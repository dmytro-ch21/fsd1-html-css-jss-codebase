const emojis = ["🧙‍♂️", "🦸‍♂️", "🧚‍♀️", "🦹‍♀️", "🧛‍♂️", "🧜‍♀️", "🧝‍♂️", "🧞‍♀️"];
const names = [
  "Luna",
  "Pixel",
  "Optimus",
  "Loki",
  "Telemakus",
  "Dimams",
  "Goku",
  "Pikachu",
];
const powers = [
  "Time Travels",
  "Unlimited PTO",
  "Invisible",
  "AI",
  "Super Intellect",
  "Superhuman Strong",
];

// helper function to generate an random index
function randomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

const nameElement = document.querySelector('.name');
const emojiElement = document.querySelector('.emoji');
const powerElement = document.querySelector('.power-text');

nameElement.innerText = randomElement(names);
emojiElement.innerText = randomElement(emojis);
powerElement.innerText = randomElement(powers);