/* eslint-disable complexity */
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

function footballPoints (wins, ties) {
  return (wins * 3) + (ties * 1);
}

console.log(footballPoints(0, 0));

// Desafio 5 - Crie a função highestCount

function highestCount (array) {
  let cont = 0;
  let higherNumber = array[0];

  for (let index = 1; index < array.length; index += 1) {
    if (array[index] > higherNumber) {
      higherNumber = array[index];
    }
  }

  for (let index1 = 0; index1 < array.length; index1 += 1) {
    if (higherNumber === array[index1]) {
      cont += 1;
    }
  }

  return cont;
}

  console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
  console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
  console.log(highestCount([0, 0, 0]));

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas

function calcTriangleArea (base, height) {
  return (base * height) / 2;

}

function calcRectangleArea (base, height) {
  return (base * height);
}

function calcAllAreas (base, height, form) {
  switch (form) {
    case 'triângulo':
      return `O valor da área do triângulo é de: ${calcTriangleArea (base, height)}`;
      break;
    case 'retângulo':
      return `O valor da área do retângulo é de: ${calcRectangleArea (base, height)}`;
      break;
    default:
      return `Não foi possível fazer o cálculo, insira uma forma geométrica válida`
      break;
  }  
}

  console.log(calcAllAreas(10, 50, 'triângulo'));
  console.log(calcAllAreas(10, 50, 'retângulo'));
  console.log(calcAllAreas(10, 50, 'quadrado'));

// Desafio 7 - Crie a função catAndMouse

function catAndMouse (mouse, cat1, cat2) {

  let positionCat1 = cat1 - mouse;
  let positionCat2 = cat2 - mouse;

  if (positionCat1 < 0) { positionCat1 = positionCat1 * -1} else if (positionCat2 < 0) { positionCat2 = positionCat2 * -1}

  if (positionCat1 > positionCat2) {
    return 'cat2';
  } else if (positionCat2 > positionCat1) {
    return 'cat1';
  } else if (positionCat1 === positionCat2){
    return 'os gatos trombam e o rato foge';
  }

}

console.log(catAndMouse(10, 13, 12));
console.log(catAndMouse(10, 16, 22));
console.log(catAndMouse(1, 2, 0));
// Desafio 8 - Crie a função fizzBuzz

function fizzBuzz (array) {

  let arr = []

  for (let index = 0; index < array.length; index += 1) {

    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      arr.push('fizzBuzz');
    } else if (array[index] % 5 === 0) {
      arr.push('buzz');
    } else if (array[index] % 3 === 0) {
      arr.push('fizz');
    } else {
      arr.push('bug!');
    }
  }

  return arr;
}

  console.log(fizzBuzz([2, 15, 7, 9, 45]));
  console.log(fizzBuzz([7, 9]));
  console.log(fizzBuzz([9, 25]));
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
