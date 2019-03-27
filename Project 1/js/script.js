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

// This is an array of objects contating quotes that will be displayed in UI
var quotes = [
    {quote: '"Nobody knows what it means, it\'s provocative."', source: 'Will Ferrell', citation: 'Blades of Glory'},
    {quote: '"I have a dream!"', source: 'Martin Luther King Jr.', year: 1963},
    {quote: '“You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.”', source: 'Dr. Suess'},
    {quote: '“When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.”', source: 'Helen Keller'},
    {quote: '“Great minds discuss ideas; average minds discuss events; small minds discuss people.”', source: 'Eleanor Roosevelt'}
];

console.log(quotes);

/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/

var getRandomQuote = function () {
    randomNumber = Math.floor(Math.random() * 5);
    return randomNumber; // might not need return, this was for testing function
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




var message = '';
var student;
var search;

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function getStudentReport (student) {
  var report = '<h2>Student: ' + student.name + '</h2>';
  report += '<p>Track: ' + student.track + '</p>';
  report += '<p>Points: ' + student.points + '</p>';
  report += '<p>Achievements: ' + student.achievements + '</p>';  
  return report;
}

while (true) {
  search = prompt('Search a student, or type "quit" to exit');
  if (search === null || search.toLowerCase() === 'quit') {
      break;    
  }
  for (var i = 0; i < students.length; i += 1) {
  student = students[i];
    
  if( student.name === search) {
    message = getStudentReport(student);
    print(message);
  }

}

}


/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.