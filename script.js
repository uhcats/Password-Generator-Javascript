const lengthNumber = document.getElementById('lengthNumber');
const containNumber = document.getElementById('containNumber');
const containSymbols = document.getElementById('containSymbols');
const text = document.getElementById('text');
const btn = document.getElementById('btn');

let result = "";
const downLetter = "qwertyuiopasdfghjklzxcvbnm";
const number = "0123456789";
const symbols = '!@#$%^&*()_-=+';



const SymbolsDownLetter = downLetter.concat(symbols);
const NumberDownLetter = downLetter.concat(number);
const SymbolsAndNumber = SymbolsDownLetter.concat(NumberDownLetter);

btn.addEventListener('click', () => {
  text.innerText = "";
  result = "";
  return checkChar()

})


function useTemplate(letter) {
  let passwordLength = lengthNumber.value;
  for (let i = 0; i < passwordLength; i++)
    result += letter.charAt(Math.floor(Math.random() * letter.length));
  text.innerText = result;
}

function checkChar() {
  if (containNumber.checked && containSymbols.checked)
    useTemplate(SymbolsAndNumber);
  else if (containSymbols.checked)
    useTemplate(SymbolsDownLetter);
  else if (containNumber.checked)
    useTemplate(NumberDownLetter);
  else
    useTemplate(downLetter);
}