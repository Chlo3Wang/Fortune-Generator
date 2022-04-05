let heading;
let executeButton;
let outputParagraph;
let outputDiv;
let inputElement;
let q1;
let randomAdj = ["amazing", "fantastic", "great", "fabulous"];
let randomCoffee = ["Americano", "Latte", "Cappucino", "Flat White"];


window.addEventListener("DOMContentLoaded", function(){
  heading = document.getElementById("title");
  executeButton = document.getElementById("executeButton");
  outputDiv = document.getElementById("fortuneOutput");
  outputParagraph = document.getElementById("outputText");
  inputElement = document.getElementById("nameInput");
  q1 = document.getElementById("question1");
  executeButton.addEventListener("click", demonstrationFunction);

});


function demonstrationFunction() {
  let inputName = inputElement.value;
  let adj = randomAdj[Math.floor (Math.random() * randomAdj.length)];
  let coffee = randomCoffee[Math.floor (Math.random() * randomCoffee.length)];

  var r = Math.random() * 50 + 80;
  var g = Math.random() * 50 + 130;
  var b = Math.random() * 50 + 180;

  let colorString = "rgb(" + r + "," + g + "," + b + ")";
  let colorShadow = "rgb(" + (r-50) + "," + (g-60) + "," + (b-70) + ")";

  heading.style.color = "rgb(" + (r-50) + "," + (g-40) + "," + (b-30) + ")";
  heading.style.textShadow = "0px 0px 10px " + colorShadow;
  heading.classList.toggle("shadow");

  q1.style.color = colorString;

  var re = Math.random() * 50 + 100;
  var gr = Math.random() * 50 + 150;
  var bl = Math.random() * 50 + 200;

  let boxColor = "rgb(" + re + "," + gr + "," + bl + ")";
  outputDiv.style.backgroundColor = boxColor;
  outputDiv.style.borderColor = "rgb(" + (re-50) + "," + (gr-40) + "," + (bl-30) + ")";

  outputParagraph.innerText = "Hi " + inputName + ". " + "You look " +adj+". "+"How about a cup of "+coffee+" ?";
  document.body.style.backgroundColor = "rgb(" + (r+70) + "," + (g+80) + "," + (b+90) + ")";
}
