const apiKey = 'L3TeWzBITwZ0Osz15FtJrwJxGm06j7Qr'
//https://api.giphy.com/v1/stickers/random?api_key=L3TeWzBITwZ0Osz15FtJrwJxGm06j7Qr

fetch(`https://api.giphy.com/v1/stickers/random?api_key=${apiKey}`)
  .then(response => response.json())
  .then(({ data }) => {
    const {url} = data.images.original
    console.log(url);

    const img = document.createElement('img')
    img.src = url
    document.body.append(img)
  })
  .catch(err => {
    console.log(err)
  })