const apiUrl = 'https://api.giphy.com/v1/gifs/search?api_key=F69twXBVXxe6k1TifOjhtNCw2um9deOg&q=panda&limit=12&offset=0&rating=g&lang=en'

export default function getGifs () {
  return fetch(apiUrl)
    .then(res => res.json())
    .then(response => {
      const {data = []} = response
      const gifs = data.map(image => image.images.downsized_medium.url)
      return gifs
    })
}