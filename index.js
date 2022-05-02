var button = document.querySelector(".mobile_nav");
let navigation = document.querySelector("#navigation");

let line1 = document.querySelector(".line1");
let line2 = document.querySelector(".line2");
let line3 = document.querySelector(".line3");

let dropdown = document.querySelector(".dropdown");

button.addEventListener("click", () => {
  button.classList.toggle("active");
  console.log("button clicked");
  dropdown.classList.toggle("show");
  if (!button.classList.contains("active")) {
    button.style.backgroundColor = "var(--primary-color)";
    document.body.style.overflowY = "scroll";
  } else {
    button.style.backgroundColor = "var(--text-color)";
    document.body.style.overflowY = "hidden";
  }
});
