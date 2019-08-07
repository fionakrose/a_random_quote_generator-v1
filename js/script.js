
// These are my quotes put into an array //




var quotes = [
  {
    quote: "Don't cry because it's over smile because it happened." ,
    source: "Dr Seuss",
    year: "1980" ,
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


  // Console log 


  console.log(quotes);


// Create function getRandomQuote

  function getRandomQuote() {
  
    let randomNumber = Math.floor(Math.random() * quotes.length);
    // return the object in quotes at position randomNumber
    return quotes[randomNumber];
  }
    
  
// Print quote functions & if statements

  console.log(getRandomQuote());


  function printQuote() {
          let randomQuote = getRandomQuote();
         let htmlQuote = '';
    htmlQuote = htmlQuote + '<p class="quote">' + randomQuote.quote + "</p>";
    htmlQuote = htmlQuote + '<p class="source">' + randomQuote.source;

    // If statement that checks for existince of a citation tag
    if (randomQuote.citation) {
      htmlQuote = htmlQuote + '<span class="citation">' + randomQuote.citation + "</span>";
    }

    // If statemenmt that checks for existence of year tag 
    if (randomQuote.year) {
      htmlQuote = htmlQuote + '<span class="year">' + randomQuote.year + "</span>";
    }
    //close source p tag
	htmlQuote = htmlQuote + '</p>'
    }

  // Another if statement that checks for existence of tags
	if (randomQuote.hasTags) {
		htmlQuote = htmlQuote + '<p class="tags">Tags: ' + randomQuote.tags + '</p>';
	}

	htmlQuote = htmlQuote + '<p class="medium">From a ' + randomQuote.medium + '</p>';

  document.getElementById("quote-box").innerHTML = htmlQuote;
  

// Print Quote function //

function printQuote() {
  let html = "";
  let RandomQuote = getrandomQuote();

  //This gets the paragraph tag from the html doc

  const quote = document.querySelector(".quote");
  

//Randomlygenerated color codes - Color codes will be randomly generated 0-15

let colorCode = '#';

let randomNumber = Math.floor(Math.random() * 16);

	colorCode = colorCode + randomNumber.toString(16);

	randomNumber = Math.floor(Math.random() * 16);
	colorCode = colorCode + randomNumber.toString(16);

	randomNumber = Math.floor(Math.random() * 16);
	colorCode = colorCode + randomNumber.toString(16);

	randomNumber = Math.floor(Math.random() * 16);
	colorCode = colorCode + randomNumber.toString(16);

	randomNumber = Math.floor(Math.random() * 16);
	colorCode = colorCode + randomNumber.toString(16);

	randomNumber = Math.floor(Math.random() * 16);
	colorCode = colorCode + randomNumber.toString(16);

	console.log(colorCode);

// Random color for background
document.body.style.backgroundColor = colorCode

//Function that will change quotes every 10 seconds //

setInterval("printQuote()", 10000);
}

 // Code for quote box 
{
  let quoteDiv = document.getElementById("quote-box");
  quoteDiv.innerHTML = html;
  return quoteDiv
  }


/***
 Do not make any changes to the line of code below this
  comment.
***/

document
  .getElementById("loadQuote")
  .addEventListener("click", printQuote, false);
