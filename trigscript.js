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

    if (curpoint <= 4) {
      numlist.push(parseFloat(value))
    }

    value = '';
    document.getElementById('curnum').innerHTML = "‎ ‎ ‎ ";
    let words = ["Input Side b:", "Input Side c:", "Input Angle A:", "Input Angle B:"];
    if (curpoint >= 0 && curpoint < 4) {
      document.getElementById('curtex').innerHTML = words[curpoint];
      curpoint += 1;

    } else {
      equals()
    }

}

function equals() {
  // Take in the input variables
var sA = numlist[0];
var sB = numlist[1];
var sC = numlist[2];
var aA = numlist[3];
var aB = numlist[4];

// Check if it's possible to find all sides and angles
if ((sA && sB && sC && aA && aB) || (!sA && !sB && !sC)) {
  document.getElementById('curnum').innerHTML = "Not enough Info :(";
  document.getElementById('curtex').innerHTML = "Your Results";
  console.log("Error: Cannot determine all sides and angles.");
} else {
  // Calculate missing angles
  if (!aA && aB) {
    aA = 90 - aB;
  } else if (!aB && aA) {
    aB = 90 - aA;
  } else if (!aA && !aB && sA && sB) {
    aA = Math.atan(sA/sB) * 180 / Math.PI;
    aB = 90 - aA;
  } else if (!aA && !aB && sA && sC) {
    aA = Math.asin(sA/sC) * 180 / Math.PI;
    aB = 90 - aA;
  } else if (!aA && !aB && sB && sC) {
    aB = Math.asin(sB/sC) * 180 / Math.PI;
    aA = 90 - aB;
  }

  // Calculate missing sides
  if (!sA && sB && aB) {
    sA = sB / Math.tan(aB * Math.PI / 180);
    sC = sA / Math.cos(aB * Math.PI / 180);
  } else if ((!sA && sC && aB) ) {
    sA = sC * Math.cos(aB * Math.PI / 180);
    sB =  Math.tan(aB * Math.PI / 180) * sA;
  }
  else if (!sB && sA && aB) {
    sB =  Math.tan(aB * Math.PI / 180) * sA;
    sC = sA / Math.cos(aB * Math.PI / 180);
  } else if (!sC && sA && sB) {
    sC = Math.sqrt(Math.pow(sA, 2) + Math.pow(sB, 2));
  }
  sA = Math.round(sA*1000)/1000;
  sB = Math.round(sB*1000)/1000;
  sC = Math.round(sC*1000)/1000;
  aA = Math.round(aA*1000)/1000;
  aB = Math.round(aB*1000)/1000;

  // Output results
  document.getElementById('curnum').innerHTML = "Side A："+sA+"<br>"+"Side B: "+sB+"<br>"+"Side C: "+sC+"<br>"+"Angle A: "+aA+"<br>"+"Angle B: "+aB;
  document.getElementById('curtex').innerHTML = "Your Results";
  document.getElementById('sdtext').innerHTML = " ";
}

}
function reset() {
  curnum = 0;
  value = '';
  numlist = [];
  curpoint = 0;
  document.getElementById('curnum').innerHTML = "Reset! Input Side a or Skip";
  document.getElementById('curtex').innerHTML = "Input Side a:";
  document.getElementById('sdtext').innerHTML = " ";

}
document.addEventListener("DOMContentLoaded", function() {
  // your JavaScript code here


});
function fun(){
  const main = document.querySelector(".main2");
  main.classList.add('rainbow');
}
