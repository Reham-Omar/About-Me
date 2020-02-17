'use strict'
var person = prompt("Please enter your name", "Reham Omar");

if (person != null) {
  alert("hello   " + person + "   how are you today?");

}
console.log(person);

var jordan = prompt("Are you from jordan ? (yes or no)").toLowerCase();
if (jordan == "yes") {
  alert("I'm from jordan too , I really like u are in my page  ");
} else if (jordan == "no") {
  alert("I'm so excited to enter my web page   ");
} /*else while (jordan !== "yes" && jordan !== "no");
{
  var jordan = prompt("Are you from jordan ? (yes or no)");

}*/
console.log(jordan);

var old = prompt("tell me how old are you ?");
if (old >= 18) {
  alert("I'm also above 18 , I'm 23  ");
} else {
  alert(" you are not adult yes so be carefull when you use the internet  ");
}
console.log(old);

var hope = prompt("do you want to be abiomedical engineer like me ? (yes or no) ").toLowerCase();
if (hope == "yes") {
  alert("i advice u to study it if yr intersting in saling or maintenance  ");
} else if (hope == "no") {
  alert("I advice u to study coding   ");
}
console.log(hope);

var draw = prompt("tell me do u like drawing  ? (yes or no )").toLowerCase();
if (draw == "yes") {
  alert(" you are like me  ");
} else if (draw == "no") {
  alert("oooh why , its the way to get the stress out   ");
}
console.log(draw);










