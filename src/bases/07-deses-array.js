
const persons = ['Kirito', 'Goku', 'Light', 'Eren']
const person = persons[0]


// desestructurar un array
const [, b, c, eren, d = 'no tiene valor'] = persons;  // no es necesario que esten todos los elementos
console.log(b);
console.log(c);
console.log(eren);
console.log(d);

//---------

const returnArray = (array) =>{
  return [array[0], array[1]]
}

const [letters, numbers] = returnArray(['ABC', 123])
console.log(letters, numbers);