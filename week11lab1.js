function number(){


var value=document.getElementById("number").value;
console.log(value);

var aName = new Array();
for(count=0;count<=value;count++){
  aName.push(count);
  console.log(count);
}
  document.getElementById("output").innerHTML = aName;

}
