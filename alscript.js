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
    let words = ["Input Angle:"];
    if (curpoint >= 0 && curpoint < 1) {
      document.getElementById('curtex').innerHTML = words[curpoint];
      curpoint+=1;

    } else{
      equals()
    }

  }
}

function equals() {

  if (value != '') {
    if (curpoint <= 1){
      numlist.push(parseFloat(value))
    }
  }

  var radius = numlist[0]
  var degree = numlist[1]

  var diameter = radius*2
  var c = diameter*Math.PI
  var arclength = (degree/360)*c
  var area = Math.PI*(Math.pow(radius,2))
  var arcarea = (degree/360)*area


  document.getElementById('curnum').innerHTML = "Sector Area: " + Math.round(arcarea*1000)/1000;
  document.getElementById('sdtext').innerHTML = "Arc Length: "+ Math.round(arclength*1000)/1000;
  document.getElementById('curtex').innerHTML = "Your Results:";
  document.getElementById('epic').innerHTML = "Extra Numbers:" + "<br /> <br />" + "Radius: "+ Math.round(radius*1000)/1000 + "<br />" + "Diameter: "+ Math.round(diameter*1000)/1000+"<br />" + "Circumfrence: "+ Math.round(c*1000)/1000 +"<br />" +"Area: " + Math.round(area *1000)/1000



}

function seeset() {
  alert("Your current numbers are:\n" + "Radius: "+numlist[0]+"\nDegree: "+ numlist[1])
}

function epicanum() {
  var radius = numlist[0]
  var degree = numlist[1]

  var diameter = radius*2
  var c = diameter*Math.PI
  var area = Math.PI*(Math.pow(radius,2))

  document.getElementById('epic').innerHTML = "Extra Numbers:" + "<br /> <br />" + "Radius: "+ Math.round(radius*1000)/1000 + "<br />" + "Diameter: "+ Math.round(diameter*1000)/1000+"<br />" + "Circumfrence: "+ Math.round(c*1000)/1000 +"<br />" +"Area: " + Math.round(area *1000)/1000

}

function reset() {
  curnum = 0;
  value = '';
  numlist = [];
  curpoint = 0;
  document.getElementById('curnum').innerHTML = "Set Reset! Input Radius!";
  document.getElementById('curtex').innerHTML = "Input Radius:";
  document.getElementById('sdtext').innerHTML = " ";

}
