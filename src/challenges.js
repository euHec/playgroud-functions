// Desafio 1 - Crie a função compareTrue

const girafa = true;
const elefante = true;
const macaco = false;

// const compareTrue = (param1, param2) => param1 === param2 && param2 === true;

function compareTrue (param1, param2) {
  if (param1 === param2 && param2 === true) {
    return true;
  } else {
    return false;
  }

}

console.log(compareTrue(macaco, macaco));

// Desafio 2 - Crie a função splitSentence

function splitSentence (phrases) {
    // if (phrases === 'foguete') {
    //   return phrases;
    // }
    let array = phrases.split(' ');

    return array;
  }

  console.log(splitSentence('go trybe'));
  console.log(splitSentence('vamo que vamo'));
  console.log(splitSentence('foguete'));

// Desafio 3 - Crie a função concatName

arrString1 = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
arrString2 = ['foguete', 'não', 'tem', 'ré'];
arrString3 = ['captain', 'my', 'captain'];

function concatName (arrString) {

  let fistItem = arrString[0];
  let lastItem = arrString[arrString.length - 1];

  return `${lastItem}, ${fistItem}`;
}

  console.log(concatName(arrString1));
  console.log(concatName(arrString2));
  console.log(concatName(arrString3));

// Desafio 4 - Crie a função footballPoints

// Desafio 5 - Crie a função highestCount

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas

// Desafio 7 - Crie a função catAndMouse

// Desafio 8 - Crie a função fizzBuzz

// Desafio 9 - Crie a função encode e a função decode

// Desafio 10 - Crie a função techList

// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => {}),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => {}),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => {}),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => {}),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => {}),
  concatName: typeof concatName === 'function' ? concatName : (() => {}),
  decode: typeof decode === 'function' ? decode : (() => {}),
  encode: typeof encode === 'function' ? encode : (() => {}),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => {}),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => {}),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => {}),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => {}),
  techList: typeof techList === 'function' ? techList : (() => {}),
};
