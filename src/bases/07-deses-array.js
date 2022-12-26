
const persons = ['Kirito', 'Goku', 'Light', 'Eren', 'Lucy']
const person = persons[0]


// desestructurar un array
const [, b, c, eren, d = 'no tiene valor'] = persons;  // no es necesario que esten todos los elementos por eso se utiliza la , la cual indica que l indice anterior no lo quiero
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