const lengthNumber = document.getElementById('lengthNumber');
const containNumber = document.getElementById('containNumber');
const containSymbols = document.getElementById('containSymbols');
const text = document.getElementById('text');
const btn = document.getElementById('btn');
const copy = document.getElementById('copy');

let result = "";
const downLetter = "qwertyuiopasdfghjklzxcvbnm";
const number = "0123456789";
const symbols = '!@#$%^&*()_-=+';



const SymbolsDownLetter = downLetter.concat(symbols);
const NumberDownLetter = downLetter.concat(number);
const SymbolsAndNumber = SymbolsDownLetter.concat(NumberDownLetter);

btn.addEventListener('click', () => {
  text.textContent = "";
  result = "";
  return checkChar()

})


function useTemplate(letter) {
  let passwordLength = lengthNumber.value;
  if (passwordLength > 20) {
    alert('Your password is too long. Max size 20');
  } else {
    for (let i = 0; i < passwordLength; i++)
      result += letter.charAt(Math.floor(Math.random() * letter.length));
    text.textContent = result;
  }


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

copy.addEventListener('click', () => {
  const password = text.textContent;
  if (!password) {
    return
  }

  // To copy element Use this
  const textarea = document.createElement("textarea");
  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("Password copied");
})