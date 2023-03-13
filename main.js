function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const colors = [
  "BlueViolet",
  "DarkMagenta",
  "DarkOrchid",
  "DarkViolet",
  "Fuchsia",
  "Indigo",
  "Lavender",
  "LavenderBlush",
  "MediumOrchid",
  "MediumPurple",
  "Purple",
  "RebeccaPurple",
  "Violet",
  "Thistle"
];

const button = document.querySelector("button");

let max = 14;
button.addEventListener("click", () => {
  let colorSelection = randomNumber(0, max);
  console.log( colorSelection );
  document.body.style.background = colors[colorSelection];
});



