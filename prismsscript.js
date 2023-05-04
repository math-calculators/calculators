var curnum = 0;
var value = 0;
var numlist = [];
var curpoint = 0;
let selectedValue = 20;
let words = ["Please Choose One Above First"]; // declare and initialize words variable outside the function
document.addEventListener("DOMContentLoaded", () => {
  const selectElement = document.getElementById("sides-select");
  selectElement.addEventListener("change", (event) => {
    selectedValue = event.target.value;
    if (selectedValue == 0){
      document.getElementById('curtex').innerHTML = "Input Radius:";
      words = ["Input Height (of prism):"]; // update value of words variable
    } else if (selectedValue == 10){
      document.getElementById('curtex').innerHTML = "Input Radius:";
      words = [];
    }else if (selectedValue == 3) {
      document.getElementById('curtex').innerHTML = "Input Base (of triangle):";
      words = ["Input Height (of triangle):", "Input Height (of prism):"]; // update value of words variable
    }else if (selectedValue == 4) {
      document.getElementById('curtex').innerHTML = "Input Side Length:";
      words = ["Input Height (of prism):"]; // update value of words variable
    } else if (selectedValue == 1) {
      document.getElementById('curtex').innerHTML = "Input Base 1 Length:";
      words = ["Input Base 2 Length:","Input Height (of trapezoid):","Input Height (of prism):"]; // update value of words variable
    }else if (selectedValue == 2) {
      document.getElementById('curtex').innerHTML = "Input Base (of rectangle):";
      words = ["Input Height (of rectangle):", "Input Height (of prism):"]; // update value of words variable
    }else if (selectedValue => 5) {
      document.getElementById('curtex').innerHTML = "Input Side Length:";
      words = ["Input Height (of prism):"]; // update value of words variable
    } else if(selectedValue == 1000){
      document.getElementById('curtex').innerHTML = "Why";
      words = ["You somehow broke it what"]; // update value of words variable
    }

    document.getElementById('curnum').innerHTML = "Input Number or Skip";
    console.log(selectedValue);
    // do something with selectedValue
  });
});

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
    let sA = 0;
    let perimeter = 0;
    // Check if it's possible to find all sides and angles
    if (selectedValue == 0){
      // Circle: A = πr^2, P = 2πr
      const radius = inputValue1;
      area = Math.PI * radius ** 2;
      perimeter = 2 * Math.PI * radius;
    } else if (selectedValue == 10){
      // Sphere: A = 4πr^2
      const radius = inputValue1;
      sA = 4 * Math.PI * radius ** 2;
      area = 4/3*Math.PI* radius ** 3;
    } else if (selectedValue == 3) {
      // Triangle: A = 0.5bh, P = a + b + c
      const base = inputValue1;
      const height = inputValue2;
      const hypotenuse = Math.sqrt(base ** 2 + height ** 2);
      area = 0.5 * base * height;
      perimeter = base + hypotenuse + height;
    } else if (selectedValue == 4) {
      // Square: A = a^2, P = 4a
      const sideLength = inputValue1;
      area = sideLength ** 2;
      perimeter = 4 * sideLength;
    } else if (selectedValue == 1) {
      // Trapezoid: A = 0.5h(b1 + b2), P = a + b + c + d
      const base1Length = inputValue1;
      const base2Length = inputValue2;
      const height = parseFloat(inputValue3);
      const leg1 = Math.abs(base1Length - base2Length) / 2;
      const leg2 = Math.sqrt(height ** 2 + leg1 ** 2);
      area = 0.5 * height * (base1Length + base2Length);
      perimeter = base1Length + base2Length + 2 * leg2;
    } else if (selectedValue == 2) {
      // Rectangle: A = bh, P = 2b + 2h
      const base = inputValue1;
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

//base area
    bA = area;
    bP = perimeter;
    // volume of shape, turned into a rectangular prisms, the last value asked is for the prisms height
if(selectedValue != 10){
  area = area * numlist[numlist.length-1]
  sA = perimeter*numlist[numlist.length-1]+2*bA;
}

    area = Math.round(area * 1000) / 1000;
    sA = Math.round(sA * 1000) / 1000;
    bA = Math.round(bA * 1000) / 1000;
    bP = Math.round(bP * 1000) / 1000;

  if (isNaN(area) || isNaN(sA)){
    document.getElementById('curnum').innerHTML = "Error! Values are not possible or not given.";
    document.getElementById('curtex').innerHTML = "Your Results:";
  }else{
    document.getElementById('curnum').innerHTML = "Area：" + area + "<br>" + "Surface Area: " + sA+ "<br>" + "Base Shape Area: " + bA+ "<br>" + "Base Shape Perimeter: " + bA;
    document.getElementById('curtex').innerHTML = "Your Results";
    document.getElementById('sdtext').innerHTML = " ";
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
document.addEventListener("DOMContentLoaded", function() {
  // your JavaScript code here


});



function fun() {
  // Array of quotes
   var quotes = [
     "The only thing between you and you're microwave is five hundred ten radioactive Peter Parkers",
     "Too many eyes is always a problem, so save the world and stab out rat's eyes",
     "Hamilton should've just banged the hurricane and his mom wouldn't have died smh",
     "Hitler was a platonic Russian tbh",
     "Tenteen socks in a boat",
     "Orange. The true question is yellow",
     "Elf on the shelf knows a lot about MILFS",
     "Iron your socks or face my wrath",
     "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
   ];

   // Randomly select a quote
   var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

   // Display the quote
   alert(randomQuote);
   alert('also thank Grey for the quotes, not my fault if there a little weird');
}

function hexagonArea(sideLength) {
  return (3 * Math.sqrt(3) / 2) * sideLength ** 2;
}

// Example usage
const sideLength = 3;
const area = hexagonArea(sideLength);
console.log(area); // Output: 23.38268199052371
