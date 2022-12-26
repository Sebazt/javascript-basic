// las promesas son asincronas
// normalmente se utilizan con información asincrona, carga de imgs, etc, bdatos


console.log('Inicio');

new Promise((resolve, reject) => {
  console.log('Cuerpo de la promesa');

  resolve('Promesa resuelta chaval', true)
  //reject('Promesa resuelta con un error chavalillo')

}).then(mensaje => console.log(mensaje))
  .catch( err => console.log(err))

console.log('Fin');