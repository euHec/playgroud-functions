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

// arr = [9, 1, 2, 3, 9, 5, 7];
// arr = [0, 4, 4, 4, 9, 2, 1];
arr = [0, 0, 0];

let higherNumber = arr[0];
let cont = 0;

function highestCount (array) {
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

  return `O número ${higherNumber} é o maior número e se repete ${cont} vezes`;
}

  console.log(highestCount(arr));


// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas

function calcTriangleArea (base, height) {
  let resultado = (base * height) / 2;
  return `O valor da área do triângulo é de: ${resultado}`

}

function calcRectangleArea (base, height) {
  let resultado = (base * height)
  return `O valor da área do retângulo é de: ${resultado}`
}

function calcAllAreas (base, height, form) {
  switch (form) {
    case 'triângulo':
      return calcTriangleArea (base, height);
      break;
    case 'retângulo':
      return calcRectangleArea (base, height);
      break;
    default:
      return `Não foi possível fazer o cálculo, insira uma forma geométrica válida`
      break;
  }  
}

let arrVerific = ['triângulo', 'retângulo', 'quadrado'];

  console.log(calcAllAreas(10, 50, arrVerific[0]));
  console.log(calcAllAreas(10, 50, arrVerific[1]));
  console.log(calcAllAreas(10, 50, arrVerific[2]));
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
