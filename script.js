const lengthNumber = document.getElementById('lengthNumber');
const containNumber = document.getElementById('containNumber');
const containSymbols = document.getElementById('containSymbols');


const textValue = text.value;
let result = " ";
const upperLetter = "QWERTYUIOPASDFGHJKLZXCVBNM";
const downLetter = "qwertyuiopasdfghjklzxcvbnm";
const number = "0123456789";
const symbols = '!@#$%^&*()_-=+';

let passwordLength = lengthNumber.value;

const SymbolsDownLetter = downLetter.concat(symbols);
const NumberDownLetter = downLetter.concat(number);
const SymbolsAndNumber = SymbolsDownLetter.concat(NumberDownLetter);


function useTemplate(letter) {
  for (let i = 0; i < passwordLength; i++) {
    result += letter.charAt(Math.floor(Math.random() * letter.length));
  }
  console.log(result);
}

if (containNumber.checked && containSymbols.checked === true) {
  useTemplate(SymbolsAndNumber);
} else if (containSymbols.checked) {
  useTemplate(SymbolsDownLetter);
} else if (containNumber.checked) {
  useTemplate(NumberDownLetter);
}