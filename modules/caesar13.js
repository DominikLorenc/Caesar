const result = document.querySelector(".result");
const resultText = document.querySelector(".result-text");


let encryptionString = [];

function caesar(str) {
  const validateStatus = validateInput(str);
  if (!validateStatus) encryptionStr(str);
}

function validateInput(str) {
  const regex = /^[a-zA-Z0-9 ]*$/;

  let status;
  if (!str.length > 0) {
    status = true;
    resultText.textContent = showResult("Nic nie wpisałeś", true);
  } else if (!regex.test(str)) {
    status = true;
    resultText.textContent = showResult(
      "tekst nie może zawierac polskich znaków i znaków specjalnych",
      true
    );
  } else status = false;

  return status;
}

function encryptionStr(str) {
  const rotNumber = document.getElementById("rot-number").value;
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
  [...str].map((el) => {
    const indexEl = alphabet.indexOf(el.toUpperCase());

    if (indexEl >= 0) {
      const indexElemnetInAlphabeth = (indexEl + parseInt(rotNumber)) % alphabet.length
      const isElementLowerCase = el === el.toLowerCase();

      if (isElementLowerCase) {
        encryptionString.push(alphabet[indexElemnetInAlphabeth].toLowerCase());
      } else {
        encryptionString.push(alphabet[indexElemnetInAlphabeth]);
      }
    } else {
      encryptionString.push(el);
    }
  });

  showResult(encryptionString.join(""), false);
}

function showResult(text, classCss) {
  result.classList.add("active");

  if (classCss) {
    resultText.classList.add("v");
    return (resultText.textContent = text);
  } else {
    resultText.textContent = text;
    resultText.classList.remove("v");
  }

  encryptionString = [];
}

export default caesar;
