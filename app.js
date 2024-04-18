let percent = document.querySelector("#per");
let CE = document.querySelector("#CE");
let C = document.querySelector("#C");

let input = document.querySelector("#resultbox")

percent.addEventListener("click", () => {
    input.value = percent.innerHTML;
});

CE.addEventListener("click", () => {
  input.value = "";
});

C.addEventListener("click", () => {
    
});