import stickerApi from './bases/11-axios'

const getImage = async() => {

  try {

    const respuesta = await stickerApi.get('/random')
    const { url } = respuesta.data.images.original

    const img = document.createElement('img')
    img.src = url
    document.body.append(img)


  } catch (error) {
    console.log('Error en la petición chavalillo ' + error);
    throw error
  }

}

getImage()