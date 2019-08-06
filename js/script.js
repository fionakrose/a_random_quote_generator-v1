
// These are my quotes put into an array //




var quotes = [
  {
    quote: "Don't cry because it's over smile because it happened." 
    , source: "Dr Seuss",
    tags: ["Grit", "Determination", "Success"]
  },
  {
    quote: "You miss 100% of the shots you don't take.",
    source: "Wayne Gretzky",
    tags: ["Just Do It", "Sport motivation"]
  },
  {
    quote: "Fall down, get back up.",
    source: "Japanese Proverb",
    tags: ["Determination", "Grit"]
  },
  {
    quote: "I have not failed. I've just found 10,000 ways that do not work.",
    source: "Thomas A. Edison",
    citation: "quotesfast.com",
    tags: ["Perserverance", "Innovation"]
  },
  {
    quote: "The only thing we have to fear is fear itself.",
    source: "Franklin D. Roosevelt",
    year: "1993", 
    tags: ["Hope", "Politics"]
  }
  ];
  
  //This gets the paragraph tag from the html doc

  const quote = document.querySelector(".quote");
  


/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/
// This function will randomly show a quote

function getRandomQuote () {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes [randomNumber];
}
//Online color codes//


let colors = [" #DC8FE5 ", " #F57B8F ", " #7B95FF ", " #F7AED4 ", " #B3DFB5 "];

// Function to randomly choose colors 

function getRandomColor () {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  return colors [randomNumber];

}

//Function that will change quotes every 10 seconds //
let timer;

function quoteTimer() {
  clearInterval(timer);
  timer = window.setInterval(printQuote, 15000);
}

function randomBackgroundColor() {
  let newBackground = randomColor();

  // Function to disply new quote when button is pressed //

  function printWuote () {
let html = "";
let RandomQuote = getrandomQuote();

// Function to get random colors and set the timer for quotes 

randomBackgroundColor();
  quoteTimer();
  html += '<p class="quote">' + randomQuote.quote + "</p>";
  html += '<p class="source">' + randomQuote.source;
  if (randomQuote.citation) {
    html += '<span class="citation">' + randomQuote.citation + "</span>";
  }
  if (randomQuote.year) {
    html += '<span class="year">' + randomQuote.year + "</span>";
  }
  html += "</p>";

 // Code for quote box 
{
  let quoteDiv = document.getElementById("quote-box");
  quoteDiv.innerHTML = html;
  return quoteDiv;
  }

// Code //

/***
 Do not make any changes to the line of code below this
  comment.
***/

document
  .getElementById("loadQuote")
  .addEventListener("click", printQuote, false);
