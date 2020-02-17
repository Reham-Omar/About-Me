var person = prompt("Please enter your name", "Reham Omar");

 if (person != null) {
  person = prompt("hello   " + person + "   how are you today?");
  
 }

function myFunction() {
  var txt;
  var jordan = prompt("Are you from jordan ? (yes or No)") .toUpperCase();
  if (jordan == "yes")  {
    alert("I'm from jordan too , I really like u are in my page  ");
  } else if (jordan=="No"){
    alert ("I'm so excited to enter my web page   ");
  } else while(jordan!=="yes" && jordan!=="No" )
  { 
    var jordan = prompt("Are you from jordan ? (yes or No)");

  }
  var old = prompt("tell me how old are you ?");
   alert (old + "is a good age  ") ;

}

document.write('<p>'+myFunction()+'</p>');