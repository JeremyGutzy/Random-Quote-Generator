/******************************************
This project will display random quotes and
change colors with them.
******************************************/



// This is an array of objects contating quotes that will be displayed in UI

var quotes = [
    {quote: '"Nobody knows what it means, it\'s provocative it gets the people going!"', source: 'Will Ferrell', citation: 'Blades of Glory'},
    {quote: '"I have a dream!"', source: 'Martin Luther King Jr.', year: 1963},
    {quote: '“You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.”', source: 'Dr. Suess'},
    {quote: '“When one door of happiness closes, another opens.”', source: 'Helen Keller'},
    {quote: '“Great minds discuss ideas; average minds discuss events; small minds discuss people.”', source: 'Eleanor Roosevelt'}
];



// This function is generating a random number to help with indexing the quotes array of objects

function getRandomQuote(){
    var randomNumber = Math.floor(Math.random() * quotes.length);
    return randomNumber;
}



// This function is generating HTML for the random quote that will be selected

function printQuote() {
    var quoteIndex = getRandomQuote();
    var HTML = '';
    
    HTML += '<p class "quote">' + quotes[quoteIndex].quote + '</p>';
    
    HTML += '<p class "source">' + quotes[quoteIndex].source;
    
    if(quotes[quoteIndex].citation) {
       HTML += '<span class="citation">' + quotes[quoteIndex].citation + '</span>';
       }
    if(quotes[quoteIndex].year) {
       HTML += '<span class="year">' + quotes[quoteIndex].year + '</span>';
       }
    
    HTML += '</p>';
    document.getElementById("quote-box").innerHTML = HTML;
}

document.getElementById('loadQuote').addEventListener("click", printQuote, false);



/*
    Function to change color when new quote is selected 
    Note: Had to reference stackoverflow for starting point
*/

var i = 0;
function changeColor() {
  var htmlID = document.getElementById("canvas");
  var buttonID = document.getElementById("loadQuote");
  var colors = ["brown", "blue", "gray", "black", "green"];
  htmlID.style.backgroundColor = colors[i];
  buttonID.style.backgroundColor = colors[i];
  i = (i + 1) % colors.length;
}

document.getElementById('loadQuote').addEventListener("click", changeColor, false);
