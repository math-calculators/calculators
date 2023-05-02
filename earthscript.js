var curnum = 0;
var value = 0;
var numlist = [];
var curpoint = 0;
var altitude = 0;
var ms = "ft";
var ms2 = "miles";
var system = 0;
window.onload = function() {
  value = '';

}

function anum(choice) {

  curnum = choice;
  value += curnum;
  document.getElementById('curnum').innerHTML = value + ms;

}

function add() {
  if (value != '') {
    altitude = value;
    equals()
  } else {
    document.getElementById('curnum').innerHTML = 'Please Input Value First';
  }

}

function equals() {

  altitude = value;

  if (system == 0) {
    altitude = altitude / 3281;

  } else if (system == 1) {
    altitude = altitude / 1000;
  }
  console.log(altitude)

  var radius = 6371;
  var hyp = 6371 + altitude;

  var seedistance = Math.sqrt(Math.pow(hyp, 2) - Math.pow(radius, 2));
  console.log(seedistance)

  if (system == 0) {
    seedistance = seedistance / 1.609;
  }

  if (system == 0) {
    ms2 = " Miles"
  } else if (system == 1) {

    ms2 = " Kilometers"
  }


  seedistance = Math.round(seedistance * 1000) / 1000;

  // Output results
  document.getElementById('curnum').innerHTML = "In One Direction：" + seedistance + ms2 + "<br>" + "In Both Directions： " + seedistance * 2 + ms2;
  document.getElementById('curtex').innerHTML = "You Can See:";
  document.getElementById('sdtext').innerHTML = " ";
}


function reset() {
  curnum = 0;
  value = '';
  numlist = [];
  curpoint = 0;
  document.getElementById('curnum').innerHTML = "Reset! Input Altitude";
  if (system == 0) {
    document.getElementById('curtex').innerHTML = "Input Altitude in Feet:";
  } else if (system == 1) {
    document.getElementById('curtex').innerHTML = "Input Altitude in Meters:";
  }
  document.getElementById('sdtext').innerHTML = " ";

}

function swapper() {
  if (ms == "ft") {
    document.getElementById('curtex').innerHTML = "Input Altitude in Meters:";
    ms = "m";
    system = 1;
    document.getElementById('curnum').innerHTML = value + ms;
    document.getElementById('swapper').innerHTML = "Switch to Imperial";
  } else {
    document.getElementById('curtex').innerHTML = "Input Altitude in Feet:";
    ms = "ft";
    system = 0;
    document.getElementById('curnum').innerHTML = value + ms;
    document.getElementById('swapper').innerHTML = "Switch to Metric";
  }
}
