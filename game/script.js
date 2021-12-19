let circle = document.querySelector(".circle");
let move = 10;
window.addEventListener("load", function () {
  circle.style.position = "relative";
  circle.style.left = 0;
  circle.style.top = 0;
});
window.addEventListener("keyup", function (k) {
  switch (k.key) {
    case "ArrowLeft":
      circle.style.left = parseInt(circle.style.left) - move + "px";
      break;
    case "ArrowRight":
      circle.style.left = parseInt(circle.style.left) + move + "px";
      break;
    case "ArrowUp":
      circle.style.top = parseInt(circle.style.top) - move + "px";
      break;
    case "ArrowDown":
      circle.style.top = parseInt(circle.style.top) + move + "px";
      break;
  }
});
