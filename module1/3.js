var num1 = parseInt(prompt("Input the 1st number: "));
var num2 = parseInt(prompt("Input the 2nd number: "));
var num3 = parseInt(prompt("Input the 3rd number: "));
var sum = num1 + num2 + num3;
var product = num1 * num2 * num3;
var average = (num1 + num2 + num3) / 3;
document.querySelector("#module1-3a").innerHTML =
  "Sum of " + num1 + " , " + num2 + " , " + num3 + " : " + sum;
document.querySelector("#module1-3b").innerHTML =
  "Product of " + num1 + " , " + num2 + " , " + num3 + " : " + product;
document.querySelector("#module1-3c").innerHTML =
  "Average of " + num1 + " , " + num2 + " , " + num3 + " : " + average;