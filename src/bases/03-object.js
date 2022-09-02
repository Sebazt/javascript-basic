

const person = {
  name: "Sebastian",
  age: "Londoño",
  colour: "white",
  addres: {
    city: "liborina",
    "zip": 0000,
    "Weather": true
  }
}
console.log(person);
const person2 = {...person}  // el ... rompe la reerencia y me permite mantener las propiedades de forma correcta.
person2.name = "Sasuke"
person.name = "Sebas"
console.log(person);

console.log(person2);
