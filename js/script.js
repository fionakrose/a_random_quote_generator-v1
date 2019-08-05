/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
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


/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/
// Function to render generated html to the dom
const printQuote = () => {
  let randQuote = getRandomQuote();


  // Generate quotation html
  let html = `<p class="quote"> ${randQuote.quote} </p>
              <p class="source"> ${randQuote.source}`

  if (randQuote.citation) {
    html += `<span class="citation">, ${randQuote.citation}</span>`
  }

  if (randQuote.year) {
    html += `<span class="year">, ${randQuote.year}</span>`
  }

  if (randQuote.tag) {
    html += `<span>, ${randQuote.tag}</span>`
  }

  html += `</p>`


  // Populate the root div with generated quote text
  rootDiv.innerHTML = html;

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
}
