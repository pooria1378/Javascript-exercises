const hp1 = 'Gryffindor';
const hp2 = 'Slytherin';
const hp3 = 'Hufflepuff';
const hp4 = 'Ravenclaw';

const name = prompt('What\'s your name: ');


let result;
result = Math.floor(Math.random() * 4) + 1;
console.log(result);

if (result === 1) {
  document.querySelector('#target').innerHTML = name + " you are " + hp1;
} else if (result === 2) {
  document.querySelector('#target').innerHTML = name + " you are " + hp2;
} else if (result === 3) {
  document.querySelector('#target').innerHTML = name + " you are " + hp3;
} else {
  document.querySelector('#target').innerHTML = name + " you are " + hp4;
}



