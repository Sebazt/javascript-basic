import axios from "axios"

const apiKey = 'L3TeWzBITwZ0Osz15FtJrwJxGm06j7Qr'
//`https://api.giphy.com/v1/stickers/random?api_key=${apiKey}`

// axios permite crear instancias

const stickerApi = axios.create({
  baseURL: 'https://api.giphy.com/v1/stickers',
  params: {
    api_key: apiKey
  }
})

stickerApi.get('/random')
  .then(response => {

    const { data } = response.data
    const { url } = data.images.original

    //console.log(response.data.data.images.original.url);
    //const url = response.data.data.images.original.url

    const img = document.createElement('img')
    img.src = url
    document.body.append(img)
  })

  export default stickerApi