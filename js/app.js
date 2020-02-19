'use strict';
var score = 0;
function nameName(){
var userName = prompt('guess my name ?');
if (userName === 'reham') {
  alert("hello  my name is " + userName);
  score++;

} else {
  alert('oops my name is Reham ');
}}
nameName();
//console.log(userName);

function nationality(){
var isJordanian = prompt("Is me from jordan ? (yes or no)").toLowerCase();
switch (isJordanian) {
  case 'yes':
  case 'y':
    alert('you guess ');
    score++;
    break;
  case 'no':
  case 'n':
    alert('I\'m from JORDAN');
  default:
    break;
}}
nationality();
//console.log(isJordanian);
function guessAge(){
var age = prompt('guess how old is me ?');
var myage = Number(age);
if (myage === 23) {
  alert(' yes ;) I\'m 23  ');
  score++;
} else {
  alert(' ooops , I\'m 23');
}}
guessAge();
//console.log(myage);

function mymajor(){
var major = prompt("Is me abiomedical engineer  ? (yes or no) ").toLowerCase();
switch (major) {
  case 'yes':
  case 'y':
    alert('you guess');
    score++;
    break;
  case 'no':
  case 'n':
    alert('thats false , I\'m BME');
    break;
  default:
    break;
}}
mymajor();
//console.log(major);

function hope(){
var likeDrawing = prompt(" do i like drawing  ? (yes or no )").toLowerCase();
switch (likeDrawing) {
  case 'yes':
  case 'y':
    alert(' i hope u like it like me ');
    score++;
    break;
  case 'no':
  case 'n':
    alert('thats false , I love it so much');
    break;
  default:
    break;
}}
hope();
//console.log(likeDrawing);

function period(){
var timestudying = prompt('guess how long is my studies in univesity ?').toLowerCase();
var mytimestudying = Number(timestudying);

if (mytimestudying === 5) {

  alert(' that\'s true  ');
  score++;
} else {

  for (var j = 0; j < 3; j++) {
    timestudying = prompt('guess how long is my studies in univesity ?').toLowerCase();
    mytimestudying = Number(timestudying);
    if (mytimestudying === 5) {

      alert(' that\'s true  ');
      score++;
    } else if (mytimestudying > 0 && mytimestudying <= 4) {
      alert(' its too low ');
    } else {
      (mytimestudying > 5);
      alert(' its  too high');
    }
  }
  alert('I sudied for 5 years  ');
}}
period();
// console.log(mytimestudying);
 function movie(){
var myFavmovies = ['harry potter', 'the princess swith', 'snow white', 'aladdin 2019', 'arrival'];
for (var k = 0; k < 6; k++) {
  var movies = prompt('guess my favourite movies  ?').toLowerCase();
  for (var w = 0; w < myFavmovies.length; w++) {
    if (movies === myFavmovies[w]) {
      alert('you are agood follower ');
      score++;
      w = 7;
      k = 9;
    }

  }
}}
movie();

alert("yr score is  " + score + "/7");
