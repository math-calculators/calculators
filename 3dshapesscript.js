var curnum = 0;
var value = 0;
var numlist = [];
var curpoint = 0;
let selectedValue = 20;
let words = ["Please Choose One Above First"]; // declare and initialize words variable outside the function
let selectedType = "prism"; // Set the default type to "prism"
document.addEventListener("DOMContentLoaded", () => {
  const selectElement = document.getElementById("sides-select");
  selectElement.addEventListener("change", (event) => {
    selectedValue = event.target.value;
    if (selectedValue == 0){ //circle
      document.getElementById('curtex').innerHTML = "Input Radius:";
      words = []; // update value of words variable
    } else if (selectedValue == 10){ //sphere
      document.getElementById('curtex').innerHTML = "Input Radius:";
      words = [];
    } else if (selectedValue == 40){ //square
      document.getElementById('curtex').innerHTML = "Input Side Length:";
      words = []; // update value of words variable
    } else if (selectedValue == 3) {
      document.getElementById('curtex').innerHTML = "Input Base (of triangle):";
      words = ["Input Height (of triangle):"]; // update value of words variable
    }else if (selectedValue == 1) {
      document.getElementById('curtex').innerHTML = "Input Base 1 Length:";
      words = ["Input Base 2 Length:","Input Height (of trapezoid):"]; // update value of words variable
    }else if (selectedValue == 4) {
      document.getElementById('curtex').innerHTML = "Input Base (of rectangle):";
      words = ["Input Height (of rectangle):"]; // update value of words variable
    }else if (selectedValue => 5) {
      document.getElementById('curtex').innerHTML = "Input Side Length:";
      words = [];
    } else if(selectedValue == 1000){
      document.getElementById('curtex').innerHTML = "Why";
      words = ["You somehow broke it what"]; // update value of words variable
    }

    if (selectedType == "prism"){
      words.push("Input Height (of prism):")
    } else if (selectedType == "pyramid"){
      words.push("Input Height (of pyramid):","Input Slant Height (of pyramid):")
    }
    if (selectedValue == 10 || selectedValue == 40) { // Sphere or Cube
  words = []; // update value of words variable
}
    document.getElementById('curnum').innerHTML = "Input Number or Skip";
    console.log(selectedValue);
    // do something with selectedValue
  });
});

function typeSelect(type) {
  // Remove the active class from all buttons
  document.getElementById("prism-btn").classList.remove("active");
  document.getElementById("pyramid-btn").classList.remove("active");

  // Add the active class to the clicked button
  document.getElementById(type + "-btn").classList.add("active");

  // Store the selected type in the global variable
  selectedType = type;
}

window.onload = function() {
  value = '';
}

function anum(choice) {
  curnum = choice;
  value += curnum;
  document.getElementById('curnum').innerHTML = value;
}

function add() {
  if (curpoint <= words.length) {
    numlist.push(parseFloat(value))
  }
  console.log(numlist)
  value = '';
  document.getElementById('curnum').innerHTML = "‎ ‎ ‎ ";
  if (curpoint >= 0 && curpoint < words.length) {
    document.getElementById('curtex').innerHTML = words[curpoint];
    curpoint += 1;
  } else {
    equals()
  }

}

  function equals() {
    // Take in the input variables
    var inputValue1 = numlist[0];
    var inputValue2 = numlist[1];
    var inputValue3 = numlist[2];
    // Initialize variables for area and perimeter
    let area = 0;
    let lA = 0;
    let sA = 0;
    let perimeter = 0;
    let volume = 0;
    let sideLength = 0;
    let radius = 0;

    // Check if it's possible to find all sides and angles
    if (selectedValue == 0){
      // Circle: A = πr^2, P = 2πr
      const radius = inputValue1;
      area = Math.PI * radius ** 2;
      perimeter = 2 * Math.PI * radius;
    } else if (selectedValue == 10){
      // Sphere: A = 4πr^2
      const radius = inputValue1;
      sA = 4 * Math.PI * Math.pow(radius, 2);
      volume = (4/3) * Math.PI * Math.pow(radius, 3);
      area = Math.PI * radius ** 3;
      perimeter =  4 * Math.PI * radius;
    } else if (selectedValue == 3) {
      // Triangle: A = 0.5bh, P = a + b + c
      const base = inputValue1;
      const sideLength = base;
      const height = inputValue2;
      const hypotenuse = Math.sqrt(base ** 2 + height ** 2);
      area = 0.5 * base * height;
      perimeter = base + hypotenuse + height;
    } else if (selectedValue == 40) {
      // Square: A = a^2, P = 4a
      const sideLength = inputValue1;
      area = sideLength ** 2;
      perimeter = 4 * sideLength;
      sA = area * 4;
      volume = area * numlist[numlist.length - 1];
      sA = perimeter * numlist[numlist.length - 1] + 2 * area;
    } else if (selectedValue == 1) {
      // Trapezoid: A = 0.5h(b1 + b2), P = a + b + c + d
      const base1Length = inputValue1;
      const base2Length = inputValue2;
      const height = parseFloat(inputValue3);
      const sideLength = (base1Length + base2Length)/2;
      const leg1 = Math.abs(base1Length - base2Length) / 2;
      const leg2 = Math.sqrt(height ** 2 + leg1 ** 2);
      area = 0.5 * height * (base1Length + base2Length);
      perimeter = base1Length + base2Length + 2 * leg2;
    } else if (selectedValue == 4) {
      // Rectangle: A = bh, P = 2b + 2h
      const base = inputValue1;
      const sideLength = base;
      const height = inputValue2;
      area = base * height;
      perimeter = 2 * (base + height);
    } else if (selectedValue == 6) {
      // Regular hexagon: A = 3√3 / 2 * a^2, P = 6a
      const sideLength = inputValue1;
      area = 3 * Math.sqrt(3) / 2 * sideLength ** 2;
      perimeter = 6 * sideLength;
    } else if (selectedValue == 5) {
      // Regular pentagon: A = 1/4 * √(5(5+2√5)) * a^2, P = 5a
      const sideLength = inputValue1;
      area = (1 / 4) * Math.sqrt(5 * (5 + 2 * Math.sqrt(5))) * sideLength ** 2;
      perimeter = 5 * sideLength;
   } else if (selectedValue == 7) {
    // Regular heptagon (septagon): A = 7/4 * a^2 * cot(π/7)
    const sideLength = inputValue1;
    area = 7/4*Math.pow(sideLength,2)* (1/Math.tan(Math.PI/7))
    perimeter = 7 * sideLength;
  } else if (selectedValue == 8) {
    // Regular octagon: A = 2(1+√2) * a^2
    const sideLength = inputValue1;
    area = 2 * (1 + Math.sqrt(2)) * sideLength ** 2;
    perimeter = 8 * sideLength;
  }

  if (selectedValue != 10 && selectedValue != 40) { // Sphere or Cube
    if (selectedType == "prism"){
      var pH = numlist[numlist.length - 1];
      volume = area * numlist[numlist.length - 1];
      lA = perimeter * pH;
      sA = perimeter * numlist[numlist.length - 1] + 2 * area;
      console.log("prism")
    } else if (selectedType == "pyramid"){
     var slantLength = numlist[numlist.length - 1];
     var pH = numlist[numlist.length - 2];
     console.log("pyra")
     if (selectedValue == 0){ //cone
       radius = inputValue1;
       if (!slantLength && pH) {
         slantLength = Math.sqrt((pH ** 2) + (radius ** 2))
       } else if ((!pH && slantLength)) {
         pH = Math.sqrt((slantLength ** 2)-(radius ** 2))
       }
       lA = Math.PI*radius*slantLength;
       sA = Math.PI*radius*slantLength+Math.PI*radius*slantLength;
       console.log(radius)
       volume = (1/3)*pH*Math.PI*Math.pow(radius, 2);
      } else{
        if (!slantLength && pH) {
          slantLength = Math.sqrt((pH ** 2) + ((sideLength/2) ** 2))
        } else if ((!pH && slantLength)) {
          pH = Math.sqrt((slantLength ** 2)-((sideLength/2) ** 2))
        }
        //V = (1/3) * B * h
        volume = (1/3)*area*pH;
        lA =.5*slantLength*perimeter;
        sA = .5*slantLength*perimeter+area;

      }
    }
  }




    // volume of shape, turned into a rectangular prisms, the last value asked is for the prisms height

    area = Math.round(area * 1000) / 1000;
    sA = Math.round(sA * 1000) / 1000;
    lA = Math.round(lA * 1000) / 1000;
    volume = Math.round(volume * 1000) / 1000;
    perimeter = Math.round(perimeter * 1000) / 1000;


  if (isNaN(area) || isNaN(sA)){
    document.getElementById('curnum').innerHTML = "Error! Values are not possible or not given.";
    document.getElementById('curtex').innerHTML = "Your Results:";
  }else{
    document.getElementById('curnum').innerHTML = "Volume：" + volume + "<br>" + "Surface Area: " + sA+ "<br>" + " Lateral Surface Area: " + lA+ "<br>" + "Base Shape Area: " + area+ "<br>" + "Base Shape Perimeter: " + perimeter;
    document.getElementById('curtex').innerHTML = "Your Results";
  }
  // Output results

}


function reset() {
  curnum = 0;
  value = '';
  numlist = [];
  curpoint = 0;
  document.getElementById('curnum').innerHTML = "Reset! Choose above first!";
  document.getElementById('curtex').innerHTML = "";
  document.getElementById('sdtext').innerHTML = " ";

}


function fun() {
  // Array of quotes
   var quotes = [
     "The only thing between you and you're microwave is five hundred ten radioactive Peter Parkers",
     "Too many eyes is always a problem, so save the world and stab out rat's eyes",
     "Hamilton should've just banged the hurricane and his mom wouldn't have died smh",
     "Hitler was a platonic Russian tbh",
     "Tenteen socks in a boat",
     "Orange. The true question is yellow",
     "Elf on the shelf knows a lot about ",
     "Iron your socks or face my wrath",
     "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
   ];

   // Randomly select a quote
   var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

   // Display the quote
   alert(randomQuote);

   alert("also thank Grey for the quotes, not my fault if they’re a little weird");
}

function hexagonArea(sideLength) {
  return (3 * Math.sqrt(3) / 2) * sideLength ** 2;
}

// Example usage
const sideLength = 3;
const area = hexagonArea(sideLength);
console.log(area); // Output: 23.38268199052371
