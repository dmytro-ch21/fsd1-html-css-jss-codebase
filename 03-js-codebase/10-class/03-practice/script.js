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

const colors = ["red", "blue", "green", "brown"];

// helper function to generate an random index
function randomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}


function generateCard() {
    const nameElement = document.querySelector(".name");
    const emojiElement = document.querySelector(".emoji");
    const powerElement = document.querySelector(".power-text");
    
    nameElement.innerText = randomElement(names);
    nameElement.style.color = randomElement(colors);
    emojiElement.innerText = randomElement(emojis);
    emojiElement.style.color = randomElement(colors);
    powerElement.innerText = randomElement(powers);
    powerElement.style.color = randomElement(colors);
}




