var curnum = 0;
var value = 0;
var numlist = [];
var curpoint = 0;
var distance = 0;
var midpoint = 0;

window.onload = function() {
  value = '';
  document.getElementById('curnum').innerHTML = "Type Number";

}

function anum(choice) {

  curnum = choice;
  value += curnum;
  document.getElementById('curnum').innerHTML = value;

}

function add() {
  if (value != '') {
    if (curpoint <= 3){
      numlist.push(parseFloat(value))
    }

    value = '';
    document.getElementById('curnum').innerHTML = "‎ ‎ ‎ ";
    let words = ["Input Y #1:", "Input X #2:", "Input Y #2:"];
    if (curpoint >= 0 && curpoint < 3) {
      document.getElementById('curtex').innerHTML = words[curpoint];
      curpoint+=1;

    } else{
      equals()
    }

  }
}

function equals() {

  if (value != '') {
    if (curpoint <= 3){
      numlist.push(parseFloat(value))
    }
  }

  var x1 = numlist[0]
  var y1 = numlist[1]
  var x2 = numlist[2]
  var y2 = numlist[3]

  var distance = Math.sqrt( Math.pow(x2 - x1,2) + Math.pow(y2-y1,2))
  var midpointx = (x1 + x2)/2
  var midpointy = (y1 + y2)/2

  document.getElementById('curnum').innerHTML = "‎Distance: " + distance;
  document.getElementById('sdtext').innerHTML = "Midpoint: "+ midpointx+", "+midpointy;
  document.getElementById('curtex').innerHTML = "Your Results:";


}

function seeset() {
  alert("Your current points are: " + numlist)
}

function boranum() {
  var borcurnum = parseFloat(prompt("(For C&P) Enter Number to Add to Set: "));
  if (barcurnum != NaN) {
    numlist.push(parseFloat(borcurnum))
  }
}

function reset() {
  curnum = 0;
  value = '';
  numlist = [];
  curpoint = 0;
  document.getElementById('curnum').innerHTML = "Set Reset! Input X #1!";
  document.getElementById('curtex').innerHTML = "Input X #1:";
  document.getElementById('sdtext').innerHTML = " ";

}
