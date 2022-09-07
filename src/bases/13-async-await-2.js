import stickerApi from './bases/11-axios'

const getImage = async() => {

  try {
    
    const respuesta = await stickerApi.get('/random')
    console.log(respuesta);


  } catch (error) {
    console.log('Error en la petición chavalillo ' + error);
    throw error
  }

}

getImage()