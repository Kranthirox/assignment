let counter = document.getElementById("counter");
let count = 0;
function increment() {
  count = count + 1;
  counter.innerHTML = count;
  checkForColor();
}
function decrement() {
  count = count - 1;
  counter.innerHTML = count;
  checkForColor();
}
function zero() {
  counter.textContent = 0
  count = 0;
  counter.innerHTML = count;
  checkForColor();
}

function checkForColor() {
  if (count < 0) {
    document.getElementById("counter").style.color = "red";
  } else if (count > 0) {
    document.getElementById("counter").style.color = "green";
  } else {
    document.getElementById("counter").style.color = "black";
  }
}
