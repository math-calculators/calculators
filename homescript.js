
  function handleClick(page) {
    // add the 'active' class to the overlay
    document.querySelector('.overlay').classList.add('active');

    // wait for a short delay, then navigate to the new page
    setTimeout(function() {
      window.location = page;
    }, 800); // 500 milliseconds delay
  }
  document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.background = "rgba(0, 0, 0, 0.7)";
    overlay.style.zIndex = "9999";
    overlay.style.display = "none";
    document.body.appendChild(overlay);
    document.querySelector('.overlay').classList.remove('active');

    // Array of sound effect URLs and/or GIF URLs
    const funOptions = [
      "https://media.giphy.com/media/UThpUbZef3ulWxgvfn/giphy.gif",
      "https://media.giphy.com/media/fyzODLrZORdUA/giphy.gif",
      "https://media.giphy.com/media/12d1LuDGbde7Zu/giphy.gif",
      "https://media.giphy.com/media/Pn7jOCXvicUyCXQCeo/giphy.gif",
      "https://media.giphy.com/media/3diweulYyUpLq/giphy.gif"


    ];

    // Get a random element from the funOptions array
    function getRandomOption() {
      const randomIndex = Math.floor(Math.random() * funOptions.length);
      return funOptions[randomIndex];
    }

    // Handle button click event
    const button = document.querySelector("#fun-button");
    button.addEventListener("click", () => {
      const funOption = getRandomOption();

      // Show overlay and add GIF to it
      overlay.style.display = "block";
      const img = document.createElement("img");
      img.src = funOption;
      img.style.position = "absolute";
      img.style.top = "50%";
      img.style.left = "50%";
      img.style.transform = "translate(-50%, -50%)";
      img.style.maxWidth = "100%";
      overlay.appendChild(img);
    });

    // Hide overlay when clicked
    overlay.addEventListener("click", () => {
      overlay.style.display = "none";
      overlay.innerHTML = "";
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    var className = "geometry"
    // Hide all buttons
    var buttons = document.getElementsByClassName("data-class");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].style.display = "none";
    }

    // Show buttons with the specified class
    var classButtons = document.getElementsByClassName(className);
    for (var j = 0; j < classButtons.length; j++) {
      classButtons[j].style.display = "inline-block";
    }

    // Set the active class on the selected button
    var selectors = document.getElementsByClassName("selector");
    for (var k = 0; k < selectors.length; k++) {
      if (selectors[k].classList.contains("active")) {
        selectors[k].classList.remove("active");
      }
    }
    document.querySelector(`button.selector[onclick="showButtons('${className}')"]`).classList.add("active");

  });

  function showButtons(className) {
  // Hide all buttons
  var buttons = document.getElementsByClassName("data-class");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].style.display = "none";
  }

  // Show buttons with the specified class
  var classButtons = document.getElementsByClassName(className);
  for (var j = 0; j < classButtons.length; j++) {
    classButtons[j].style.display = "inline-block";
  }

  // Set the active class on the selected button
  var selectors = document.getElementsByClassName("selector");
  for (var k = 0; k < selectors.length; k++) {
    if (selectors[k].classList.contains("active")) {
      selectors[k].classList.remove("active");
    }
  }
  document.querySelector(`button.selector[onclick="showButtons('${className}')"]`).classList.add("active");
}
