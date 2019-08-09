
// These are my quotes put into an array //

let quotes = [
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

console.log(quotes);

function getRandomQuote() {
	// generates random number 
  let random = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[random];
	// return the object in quotes 
	return randomQuote;
}



function printQuote() {
	let quote = getRandomQuote();
  let message = '';

//The message is made using HTML classes for the paragraphs 
message += '<p class="quote">' + quote.quote + '</p>';
message += '<p class="source">'+ quote.source;


// If the tags 'citation' and 'year' are used then they are added to the message

if(quote.citation !== undefined){ 
  message += '<span class="citation">' + quote.citation + '</span>';
  }
if (quote.year !== undefined) {
  message += '<span class="year">' + quote.year + '</span>';
  } 
message += '</p>';




// This is the function to write the content of the message variable inside 'quote-box'
function printQuote() {
  let div = document.getElementById('quote-box');
  div.innerHTML = message;
  return(message);
}

printQuote();
  



	//color is represented as 6 digit number so this code will generate six random numbers between 0 and 10 and make random colors



  let colorCode = '#';

	let randomNumber = Math.floor(Math.random() * 10);
	colorCode = colorCode + randomNumber.toString(10);

	randomNumber = Math.floor(Math.random() * 10);
	colorCode = colorCode + randomNumber.toString(10);

	randomNumber = Math.floor(Math.random() * 10);
	colorCode = colorCode + randomNumber.toString(10);

	randomNumber = Math.floor(Math.random() * 10);
	colorCode = colorCode + randomNumber.toString(10);

	randomNumber = Math.floor(Math.random() * 10);
	colorCode = colorCode + randomNumber.toString(10);

	randomNumber = Math.floor(Math.random() * 10);
	colorCode = colorCode + randomNumber.toString(10);

	console.log(colorCode);

	// this code will assign random color the page's background 
	document.body.style.backgroundColor = colorCode;

}

// this code will change the code every 8 seconds = 8000 milliseconds
setInterval("printQuote()", 8000);

 
/***
 Do not make any changes to the line of code below this
  comment.
***/

document
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

