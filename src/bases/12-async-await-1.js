// una función asyncrona retorna una promesa como tal y el await solo puede ser usado
//en una función asincrona.

const miPromesa = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('Tenemos un valor en la promesa chavalillo')
      //rej('Error en mi promesa chavalillo')
    }, 1000);
  })
}

const medirTiempoAsync = async () => {

  try {
    console.log('----- Inicio ------');

    const respuesta = await miPromesa()
    console.log(respuesta);

    console.log('----- Fin ------');

    return ' Fn de esta función de tiempoAsync'

  } catch (error) {
    return 'Error en medir tiempoAsync'
    throw 'Error en medir tiempoAsync' //throw es para obligar el error x el catch
  }
}

medirTiempoAsync()
  .then(value => console.log('Exitoso ',value))
  .catch(err => console.log('Error: ' + err))