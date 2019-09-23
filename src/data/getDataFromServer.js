const getDataFromServer = () => {
  return fetch('https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json')
    .then(response => response.json())
    .then(data => data.results.map(character => {
      const {id, name, species, origin, image, status, episode} = character;
      return {
        id: id,
        name: name,
        species: species,
        origin: origin.name,
        image: image,
        status: status,
        episodes: episode.length
      }
    }))
}

export default getDataFromServer