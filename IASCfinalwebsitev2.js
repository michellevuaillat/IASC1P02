
var noun = new Array();
noun= ["chocolate", "caramel", "strawberry", "vanilla", "salted caramel"];
console.log(noun.length);

var cake = new Array();
cake= ["sponge", "mud cake", "cupcake", "pound cake", "sponge"];
console.log(cake.length);
console.log(cake[3]);

var cream = new Array();
cream= ["salted caramel", "raspberry", "chocolate ganache", "oreo", "hazelnut"];

function generate(){
var num1= Math.floor( Math.random()*4 );
var num2= Math.floor( Math.random()*4 );
var num3= Math.floor( Math.random()*4 );

document.getElementById("output").innerHTML="How about a "+noun[num1] + " " + cake[num2] + " " + "with " + cream[num3] + " " + "cream!";
console.log(noun);

}

var todayDate = new Date();
	var month = todayDate.getMonth();
	var date = todayDate.getDate();
	var year = todayDate.getFullYear();


newdate= date + "/" + month + "/" + year;
	document.getElementById("today").innerHTML= newdate;
	console.log(date);
