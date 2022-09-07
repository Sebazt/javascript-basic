let firstName;
let lastName;

//console.log(`${firstName || 'Sebastian'} ${lastName || 'londoño'}`);

const isActive = true;


// con ternario
const message = (!isActive === true)
  ? 'Activo' 
  : 'Inactivo chaval';

console.log(message);