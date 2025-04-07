const loginEvent = new CustomEvent("login", {
  // Optionally set up custom event details
  detail: {
    validUser: true,
  },
});

document.dispatchEvent(loginEvent);

function loginUser() {
  console.log("Logging in...");
}

const loginButton = document
  .getElementById("login-button")
  .addEventListener("click", (event) => {
    loginUser(event);
  });

// DOM Event Properties

// target -> Element that triggered an event
// currentTarget -> Element where the event listener is attached to
// clientX -> X coordinate(horizontal) of a mouse click
// clientY -> Y coordinate(vertical) of a mouse click

function onClickItem(event) {
  let text = event.target.textContent;
  console.log(`Mouse coordinates: ${event.clientX}, ${event.clientY}`);
  console.log(`Captured text: ${text}`);
}

document.querySelector("ol").addEventListener("click", onClickItem);

function checkPassword() {
  let pass = document.getElementById("pass").value;
  let user = document.getElementById("user").value;
  console.log(user, pass);
}

//Direktno u JS, ne moramo da postavljamo onchange u html

document.getElementById("pass").onchange = (event) => {
  let pass = document.getElementById("pass").value;
  let user = document.getElementById("user").value;
  console.log(user, pass);
};

//
document.getElementById("outer").addEventListener(
  "click",
  (ev) => {
    console.log("Click event received from outer div");
  },
  false
);

document.getElementById("inner").addEventListener("click", (ev) => {
  ev.stopPropagation();
  console.log("Click event received from inner div");
});

//Treci parametar je defaultno FALSE.
// Kad kliknemo inner div, hvata i outer i inner. Radi bubbling
// AKo je TRUE, radi CAPTURING ( POGLEDAJ SLIKU, sta je BUBBLING a sta CAPTURING )

// Kako bi ovo izbegli, koristimo stopPropagation(), a da preventujemo default akcije, koristimo preventDefault()
