

const getPokemon = (pokemonItem) => {

  console.log("get pokemon =>", pokemonItem)

  const pokemonFormatted = pokemonItem.toLowerCase()

  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonFormatted}`

  console.log(pokemonFormatted)


  return fetch(url, { method: 'GET' })
    .then((res) => res.json())
    .then((result) => {

      //Aquí debemos poner un control de pokemon existente o error de la api?
      return result
    })

    .catch((error) => {
      alert('Pokemon no existe')
      console.log("catch error del fetch")
      return null

    })
}

export default getPokemon