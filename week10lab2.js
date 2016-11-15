var myPrompt= prompt("What is your age?");
console.log(myPrompt);

var todayDate = new Date();
var year = todayDate.getFullYear();
console.log(year);

var birthyear= year - myPrompt;


  document.getElementById("output").innerHTML = birthyear;
