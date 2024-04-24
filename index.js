const display = document.getElementById("display");

function passToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function equAns() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
    setTimeout(() => {
      display.value = "";
    }, 1000);
  }
}
