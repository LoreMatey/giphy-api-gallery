const apiKey = 'F69twXBVXxe6k1TifOjhtNCw2um9deOg'

export default function getGifs ({ keyword = 'panda' } = {}) {

  const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=12&offset=0&rating=g&lang=en`

  return fetch(apiUrl)
    .then(res => res.json())
    .then(response => {
      const {data = []} = response
      const gifs = data.map(image => image.images.downsized_medium.url)
      return gifs
    })
}