const result = document.querySelector(".result");
const resultText = document.querySelector(".result-text");

let encryptionString = [];

function caesar(str) {
  const regex = /^[a-zA-Z0-9 ]*$/;

  if (str === "" || !regex.test(str)) {
    showResult();
    throw new Error('value must be a string')
  }

  encryptionStr(str);
  showResult(encryptionString.join(""));
  
}

function encryptionStr(str) {
  const alphabet = [
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
  ];

  [...str].forEach((el) => {
    const indexEl = alphabet.indexOf(el.toUpperCase());
    if (indexEl >= 0) {
      const indexElemnetInAlphabeth = (indexEl + 13) % alphabet.length;
      
      if(el === el.toLowerCase()){
        encryptionString.push(alphabet[indexElemnetInAlphabeth].toLowerCase());
      }else{
        encryptionString.push(alphabet[indexElemnetInAlphabeth])
      }
      


    } else {
      encryptionString.push(el);
    }
  });
}

function showResult(text = "wpidz ciąg znaków") {
  result.classList.add("active");
  resultText.textContent = text;
  encryptionString = [];
}


export default caesar;
