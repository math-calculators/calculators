var curnum = 0;
var value = 0;
var numlist = [];
var curpoint = 0;
var distance = 0;
var midpoint = 0;
var skipcount = 0;

window.onload = function() {
  value = '';
  document.getElementById('curnum').innerHTML = "Input Number or Skip";

}

function anum(choice) {

  curnum = choice;
  value += curnum;
  document.getElementById('curnum').innerHTML = value;

}

function add() {

  if (curpoint <= 2) {
    numlist.push(parseFloat(value))
  }

  value = '';
  document.getElementById('curnum').innerHTML = "‎ ‎ ‎ ";
  let words = ["Input Apothem:", "Input Radius:"];
  if (curpoint >= 0 && curpoint < 2) {
    document.getElementById('curtex').innerHTML = words[curpoint];
    curpoint += 1;

  } else {
    equals()
  }

}
let selectedValue = 3;


document.addEventListener("DOMContentLoaded", () => {
  const selectElement = document.getElementById("sides-select");
  selectElement.addEventListener("change", (event) => {
    selectedValue = event.target.value;
    console.log(selectedValue);
    // do something with selectedValue
  });
});

function equals() {
  // Take in the input variables
  var sN = selectedValue;
  var sL = numlist[0];
  var apo = numlist[1];
  var rad = numlist[2];
  console.log(sN);
  // rest of the function

  // Check if it's possible to find all sides and angles
  if (sN == undefined) {
    document.getElementById('curnum').innerHTML = "# of Sides Needed";
    document.getElementById('curtex').innerHTML = "Your Result:";
  } else if(!apo && !sL && !rad) {
    document.getElementById('curnum').innerHTML = "At least One Value is needed!";
    document.getElementById('curtex').innerHTML = "Your Result:";

  }else {


  // Calculate missing values
  // base angle
  var bA = (180 * (sN - 2)) / sN / 2;
  if (!apo && rad) {
    var base = Math.cos(bA * Math.PI / 180)*rad;
    sL = base * 2;
    apo = Math.tan(bA * Math.PI / 180)*base;
  } else if ((!apo && sL)) {
    var base = sL / 2;
    apo = Math.tan(bA * Math.PI / 180)*base;
    rad = base / Math.cos(bA * Math.PI / 180);
  } else if (!sL && apo) {
    var base = apo / Math.tan(bA * Math.PI / 180);
    sL = base * 2;
    rad = base / Math.cos(bA * Math.PI / 180);
  }
  var p = sN * sL;
  var area = .5 * apo * p;
  sL = Math.round(sL * 1000) / 1000;
  apo = Math.round(apo * 1000) / 1000;
  rad = Math.round(rad * 1000) / 1000;
  p = Math.round(p * 1000) / 1000;
  area = Math.round(area * 1000) / 1000;


  // Output results
  document.getElementById('curnum').innerHTML = "Area：" + area + "<br>" + "Perimeter: " + p + "<br>" + "Side Length: " + sL + "<br>" + "Apothem: " + apo + "<br>" + "Radius: " + rad;
  document.getElementById('curtex').innerHTML = "Your Results";
  document.getElementById('sdtext').innerHTML = " ";
}
}






function reset() {
  curnum = 0;
  value = '';
  numlist = [];
  curpoint = 0;
  document.getElementById('curnum').innerHTML = "Reset! Input Side Length or Skip";
  document.getElementById('curtex').innerHTML = "Input Side Length:";
  document.getElementById('sdtext').innerHTML = " ";

}
document.addEventListener("DOMContentLoaded", function() {
  // your JavaScript code here


});



function fun() {
  // Array of quotes
   var quotes = [
     "The only way to do great work is to love what you do. - Steve Jobs",
     "Believe you can and you're halfway there. - Theodore Roosevelt",
     "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
     "Strive not to be a success, but rather to be of value. - Albert Einstein",
     "I have not failed. I've just found 10,000 ways that won't work. - Thomas Edison"
   ];

   // Randomly select a quote
   var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

   // Display the quote
   alert(randomQuote);
   alert('also thank ChatGPT for the quotes')
}
