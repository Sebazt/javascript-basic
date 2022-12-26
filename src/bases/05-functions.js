const myName = 'Sebas'

//primer forma
function greeting(name) {
  return `hola ${name}`
}

// segunda forma
const bye = function () {
  return 'Good bye'
}

// función flecha
const presentation = (n) => {
  return `Hi ${n} is a pleasure`
}

// función flecha implico
const pet = () => ' Hola mi nombre es Gohan'


// return implicito
const getUser = () => ({
  uid: 'abcd21',
  userName: 'Sebast10'
})

// other example
const uchihas = [{
  id: 1,
  name: 'Sasuke'
}, {
  id: 2,
  name: 'Itachi'
}]

const findUchiha = uchihas.some((uchiha) => uchiha.id === 1)
console.log(findUchiha);
console.log("---------------------------------");

//-------------------------


const findUchiha2 = uchihas.find((uchiha) => {
  const uchihafind = uchiha.id === 2;
  return uchihafind
})
console.log(findUchiha2);
console.log("---------------------------------");

//así los desestructuro

const { id, name } = uchihas.find((u) => {
  return u.id === 1;
})
console.log(id, name);
console.log("---------------------------------");





