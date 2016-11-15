function add(){
  num1= document.getElementById("num1").value;
  num2= document.getElementById("num2").value;
  var total= Number(num1)+Number(num2);
  document.getElementById("output").innerHTML = total;

}
