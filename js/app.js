'use strict';

var username = prompt('Hello! My name is Jonny. What is your name?');
console.log('User\'s name is ' + username);

var gamestart = confirm('Ok, ' + username + '. Ready to play a guessing game?');

if (gamestart === true) {
  alert('Awesome!');
} else {
  alert('Too bad.');
}
console.log('User confirmed ' + gamestart + ' for game start readiness');

function lab (){

  var counter = 0;

  var questions = [
    'Do I live in Seattle? (Yes or No)',
    'Do you think I want to live in Seattle forever? (Yes or No)',
    'Am I older than 30? (Yes or No)',
    'Do I ride a motorcycle? (Yes or No)',
    'Do you think I have any dogs? (Yes or No)',
    'What is my lucky number? (Clue: 1-15)',
    'What is one of my favorite colors in the rainbow?'
  ];

  var possibleAnswers = [
    ['yes', 'YES', 'Yes', 'y', 'Y', 'No', 'NO', 'no', 'N', 'n'],
    ['yes', 'YES', 'Yes', 'y', 'Y', 'No', 'NO', 'no', 'N', 'n'],
    ['yes', 'YES', 'Yes', 'y', 'Y', 'No', 'NO', 'no', 'N', 'n'],
    ['yes', 'YES', 'Yes', 'y', 'Y', 'No', 'NO', 'no', 'N', 'n'],
    ['yes', 'YES', 'Yes', 'y', 'Y', 'No', 'NO', 'no', 'N', 'n'],
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'],
    ['Red', 'red', 'RED',
      'Orange', 'orange', 'ORANGE',
      'Yellow', 'yellow', 'YELLOW',
      'Green', 'green', 'GREEN',
      'Blue', 'blue', 'BLUE',
      'Indigo', 'indigo', 'INDIGO',
      'Violet', 'violet', 'VIOLET']
  ];

  var correctAnswers = [
    ['yes', 'YES', 'Yes', 'y', 'Y'],
    ['No', 'NO', 'no', 'N', 'n'],
    ['No', 'NO', 'no', 'N', 'n'],
    ['yes', 'YES', 'Yes', 'y', 'Y'],
    ['yes', 'YES', 'Yes', 'y', 'Y'],
    ['12'],
    ['Orange', 'orange', 'ORANGE',
      'Red', 'red', 'RED','Blue',
      'blue', 'BLUE']
  ];

  var tries = [1, 1, 1, 1, 1, 4, 6];

  var responses = [];

  for (var turnIndex = 0; turnIndex < questions.length; turnIndex++) {
    for (var tryIndex = 0; tryIndex < tries[turnIndex]; tryIndex++) {
      var response = '';
      while (!possibleAnswers[turnIndex].includes(response)) {
        response = prompt(questions[turnIndex]);
      }
      responses.push(response);
      console.log(response);
  
      // Check to see if the response is correct
      if (correctAnswers[turnIndex].includes(response)) {
        alert('Correct!');
        counter++;
        break;
      } else if (response === '1') {
        alert('Too low, ' + (tries[turnIndex] - tryIndex - 1) + ' left.');
      } else if (response === '2') {
        alert('Too low, ' + (tries[turnIndex] - tryIndex - 1) + ' left.');
      } else if (response === '3') {
        alert('Too low, ' + (tries[turnIndex] - tryIndex - 1) + ' left.');
      } else if (response === '4') {
        alert('Too low, ' + (tries[turnIndex] - tryIndex - 1) + ' left.');
      } else if (response === '5') {
        alert('Too low, ' + (tries[turnIndex] - tryIndex - 1) + ' left.');
      } else if (response === '6') {
        alert('Too low, ' + (tries[turnIndex] - tryIndex - 1) + ' left.');
      } else if (response === '7') {
        alert('Too low, ' + (tries[turnIndex] - tryIndex - 1) + ' left.');
      } else if (response === '8') {
        alert('Too low, ' + (tries[turnIndex] - tryIndex - 1) + ' left.');
      } else if (response === '9') {
        alert('Too low, ' + (tries[turnIndex] - tryIndex - 1) + ' left.');
      } else if (response === '10') {
        alert('Too low, ' + (tries[turnIndex] - tryIndex - 1) + ' left.');
      } else if (response === '11') {
        alert('Too low, ' + (tries[turnIndex] - tryIndex - 1) + ' left.');
      } else if (response === '13') {
        alert('Too high, ' + (tries[turnIndex] - tryIndex - 1) + ' left.');
      } else if (response === '14') {
        alert('Too high, ' + (tries[turnIndex] - tryIndex - 1) + ' left.');
      } else if (response === '15') {
        alert('Too high, ' + (tries[turnIndex] - tryIndex - 1) + ' left.');
      // If they're on their last try:
      } else if (tryIndex === tries[turnIndex] - 1) {
        alert('Incorrect.');

        // If they're on their last try:
      } else if (tryIndex === tries[turnIndex] - 1) {
        alert('Incorrect.');
        // If they have more tries left:
      } else {
        alert('Incorrect. You have ' + (tries[turnIndex] - tryIndex - 1) + ' left.');
      }
    }
  }
  alert(username + ', you got ' + counter + ' out of ' +
      questions.length + ' correct.');

}
lab ();