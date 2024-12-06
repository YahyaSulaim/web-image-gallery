const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

/* Declaring the array of image filenames */
src = [
  "images/pic1.jpg",
  "images/pic2.jpg",
  "images/pic3.jpg",
  "images/pic4.jpg",
  "images/pic5.jpg",
];

/* Declaring the alternative text for each image file */
alt = [
  "Closeup of a human ey",
  "white abstract",
  "flowers",
  "painting",
  "butterfly",
];
/* Looping through images */
src.forEach((file, index) => {
  const newImage = document.createElement("img");
  newImage.setAttribute("src", file);
  newImage.setAttribute("alt", alt[index]);
  thumbBar.appendChild(newImage);
});

document.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    displayedImage.src = e.target.src;
  }
});
/* Wiring up the Darken/Lighten button */

btn.addEventListener("click", () => {
  const btnClass = btn.getAttribute("class");
  if (btnClass === "dark") {
    btn.setAttribute("class", "light");
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
  } else {
    btn.setAttribute("class", "dark");
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
  }
});
