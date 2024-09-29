const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

// Elementos del DOM!

const firstPass = document.getElementById("firstPass");
const secondPass = document.getElementById("secondPass");
const buttonEl = document.getElementById("pass-btn");
const lengthInput = document.getElementById("password-length");
let randomPass = "";

function generatePassword(length = 15) {
  let randomPass = "";
  for (let i = 0; i < length; i++) {
    randomPass += characters[Math.floor(Math.random() * characters.length)];
  }
  return randomPass;
}

// Evento para generar contraseñas
buttonEl.addEventListener("click", () => {
  // Obtener el valor de longitud del input
  const length = parseInt(lengthInput.value) || 15; // Usar 15 como valor por defecto
  firstPass.textContent = generatePassword(length);
  secondPass.textContent = generatePassword(length);
});

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert("Password copied to clipboard!");
  });
}

firstPass.addEventListener("click", () =>
  copyToClipboard(firstPass.textContent)
);
secondPass.addEventListener("click", () =>
  copyToClipboard(secondPass.textContent)
);
