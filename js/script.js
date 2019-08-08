
// These are my quotes put into an array //

<script type="text/javascript" src="http://code.jquery.com/jquery-1.7.1.min.js"></script>



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

console.log(quotes);

function getRandomQuote() {
	// generates random number 
	let randomNumber = Math.floor(Math.random() * quotes.length);
	// return the object in quotes 
	return quotes[randomNumber];
}

console.log(getRandomQuote());

function printQuote() {
	let objectQuote = getRandomQuote();
  let htmlQuote = '';
  



	// html tags with object properties
	htmlQuote = htmlQuote + '<p class="quote">' + objectQuote.quote + '</p>';
  htmlQuote = htmlQuote + '<p class="source">' + objectQuote.source;
  


	//if statement that checks for the existence of a citation tag
	if (objectQuote.hasCitation) {
		htmlQuote = htmlQuote + '<span class="citation">' + objectQuote.citation + '</span>';
  }
  


	//if statement that checks for the existence of the year tag
	if (objectQuote.hasYear) {
		htmlQuote = htmlQuote + '<span class="year">' + objectQuote.year + '</span>';
  }
  


	//close source p tag
  htmlQuote = htmlQuote + '</p>';
  



	//if statement that will check for the existence of tags
	if (objQuote.hasTags) {
		htmlQuote = htmlQuote + '<p class="tags">Tags: ' + objQuote.tags + '</p>';
	}

	htmlQuote = htmlQuote + '<p class="medium">From a ' + objQuote.medium + '</p>';

  document.getElementById("quote-box").innerHTML = htmlQuote;
  



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

// this code will change the code every 15 seconds = 15000 milliseconds
setInterval("printQuote()", 15000);

 
/***
 Do not make any changes to the line of code below this
  comment.
***/

document
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

