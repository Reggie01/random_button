function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function noRepeatRandomNumber( last_number, max_no ) {
  let colorSelection = randomNumber( 0, max_no);
  if( last_number ) {
    while( colorSelection == last_number ) {
        colorSelection = randomNumber(0, max);
    }
  }
  return colorSelection;
}

let last_number;

const btn_sizes = [ 'large_btn', 'med_btn', 'small_btn' ];

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

let max = 13;
let last_btn_selection;
button.addEventListener("click", () => {
  let colorSelection = noRepeatRandomNumber( last_number, max );

  last_number = colorSelection;

  console.log( colors[colorSelection] );
  document.body.style.background = colors[colorSelection];
  button.style.color = colors[(colorSelection * 2) % max ];

  let buttonSelection = colorSelection % 3;
  
  if( last_btn_selection ) {
    button.classList.replace( last_btn_selection, btn_sizes[buttonSelection] );
    last_btn_selection = btn_sizes[buttonSelection];
  } else {
    button.classList.add( btn_sizes[buttonSelection] );
    last_btn_selection = btn_sizes[buttonSelection];
  }
  
  
});



