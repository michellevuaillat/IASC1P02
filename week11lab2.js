

  var noun = new Array();
  noun= ["apple", "banana", "orange", "zucchini", "cucumber"];
  console.log(noun.length);

  var adj = new Array();
  adj= ["happy", "sad", "funny", "mean", "cool"];
  console.log(adj.length);
  console.log(adj[3]);

function generate(){
  var num= Math.floor( Math.random()*4 );
  var num2= Math.floor( Math.random()*4 );

  document.getElementById("output").innerHTML="What a "+adj[num] + " " + noun[num2];
  console.log(noun);

}
