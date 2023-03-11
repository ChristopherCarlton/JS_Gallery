/* 
  JAVASCRIPT
``- main programming language supported by web browser
  - single-threaded, object-oriented
  - use the Document Object Model (DOM) interface
  to interact with HTML elements and CSS
*/

// randomly generate a color
// change the color of the heading
function randomColor() {
  // use rgb() color mode
  // statements end with semi-colons, not necessayr
  // if they're the only statement on a line
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  // use JS template string to inject variables into a String
  let colorValue = `rgb(${r} ${g} ${b})`;
  return colorValue;
}

// print to the console
console.log(randomColor());

// select the element we want to modify
let titleElement = document.getElementById("page-title");
titleElement.style.color = randomColor();

const RESPONSES = [
  "Maybe",
  "Perhaps",
  "Absolutely",
  "It does not appear that way",
  "Not a chance",
  "If you're lucky"
];

// you can also select elements using querySelector
// allows you to use a css selector to match an element
// querySelectorAll - if multiple elements match, it gives you a list of the elements

// first param to addEventListener is the name of the event you want to trigger an action
// the second param is a function that executes when that action happens
// an arrow function in JS has no name, just exists in the context where it is executing
document.querySelector("#ask-btn").addEventListener("click", () => {
  // generate a random number between 0 and the length of responses
  let randomIndex = Math.floor(Math.random() * RESPONSES.length);
  // use that number to index the list to get a random response
  let randomResponse = RESPONSES[randomIndex];
  // change the text of our response p element to display our response
  document.querySelector("#response").innerText = "Response: " + randomResponse;
});

const PHOTOS = [
  "https://www.jacksonsart.com/blog/wp-content/uploads/2014/08/matissethesheaf1953.jpg",
  "https://news.artnet.com/app/news-upload/2014/04/matisse-image-homepage.jpg",
  "https://wilderpaintsplatters.files.wordpress.com/2011/11/kidsmatisse-0021.jpg"
];
let index = 0;
document.querySelector(".painting").src = PHOTOS[index];

// TODO: add an event listener to both the previous and next buttons
// depending on which button is clicked, increment or decrement the index
// disable a button if clicking it would result in index out of bounds
document.querySelector("#prev").addEventListener("click", () => {
  index -= 1;
  document.querySelector("#next").disabled = false;
  if (index === 0) {
    document.querySelector("#prev").disabled = true;
  }
  document.querySelector(".painting").src = PHOTOS[index];
});
// this
function goToNext() {
  index += 1;
  document.querySelector("#prev").disabled = false;
  if (index === PHOTOS.length - 1) {
    document.querySelector("#next").disabled = true;
  }
  document.querySelector(".painting").src = PHOTOS[index];
}

document.querySelector("#next").addEventListener("click", goToNext);

// calculator example, with adding and removing elements
let result = document.createElement("p");

function add(n1, n2) {
  // we can always log stuff out to the console to debug
  // and see it in the developer tools
  console.log("Received " + n1 + " and " + n2);
  document.querySelector(".addition").appendChild(result);
  result.innerText = parseInt(n1) + parseInt(n2);
}

document
  .querySelector("#add-btn")
  .addEventListener("click", () =>
    add(
      document.querySelector("#n1").value,
      document.querySelector("#n2").value
    )
  );

document.querySelector("#clear").addEventListener("click", () => {
  document.querySelector(".addition").removeChild(result);
});
