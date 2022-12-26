let firstName;
let lastName;
// si esto no tiene un valor, le asigna el que le doy por defecto
console.log(`${firstName || 'Sebastian'} ${lastName || 'londoño'}`);



const isActive = true;


// con ternario
const message =
  (isActive === true)
    ? 'Diamante'
    : 'Plata chaval';

console.log(message);