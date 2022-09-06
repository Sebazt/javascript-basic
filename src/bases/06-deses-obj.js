const person = {
  name: 'naruto',
  age: 20,
  codeName: 'Hokage'
}

// las constantes se extraen de person
const { age, codeName, name, propiedad = 'se puede crear una pro. así' } = person;
console.log(age);
console.log(codeName);
console.log(name);
console.log(propiedad);

const createNinja = ({ name, age, codeName }) => {

  return {
    id: 12230302,
    name,
    age: age,
    codeName,
  }
}

console.log(createNinja(person));