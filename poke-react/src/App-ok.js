import { useEffect, useState } from 'react'
import { v4 as idGenerator } from 'uuid';


import './App.css'

// 1. Crea un input.
// 2. Crea un botón (recordad que puede ser un `div` o un `button`).
// 3. Crea una lista (`array`).
// 4. Crea, con `useState`, dos estados; uno para input (`''`) y otro para un pokemon (`{}`).
// 5. Cada vez que escribamos en el input, su contenido se deberá guardar en el estado del input.

export const App = () => {
  //URL PARA EL HET

  //Hook para el input y la query de pokemon.
  const [pokemonQuery, setQuery] = useState('')

  //Hook para el botón add que añadirá el pokemon a una lista
  const [pokemonList, setPokemonList] = useState([])

  //Evento para capturar el input de la query.

  const handlePokemonQuery = event => setQuery(event.target.value)

  //remove pokemonQuery en input after ADD button.
  const removeInputText = () => {
    setQuery('')
  }

  //FUNCION GET FROM API
  const getPokemon = (pokemonItem) => {

    console.log("get pokemon =>", pokemonItem)

    const pokemonFormatted = pokemonItem.toLowerCase()

    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonFormatted}`

    console.log(pokemonFormatted)

    fetch(url, { method: 'GET' })
       .then((res) => res.json())
       .then((result) => {
         //Aquí debemos poner un control de pokemon existente o error de la api?

        const isRepeated = pokemonList.some((pokemon)=>{
          return pokemon.name === result.name
        })

        isRepeated ? alert('Pokemon está ya en la lista') : setPokemonList([...pokemonList,result])

       })
       .catch((error) => {
         alert('Pokemon no existe')
         console.log("catch error del fetch")
       })

  }

  //Add Pokemon to object
  const addPokemonQuery = () => {
    //console.log(pokemonQuery)
    getPokemon(pokemonQuery)
    removeInputText()
  }

  return (
    <div>
      <p>hola</p>
      <div>
        <input onChange={handlePokemonQuery} value={pokemonQuery} />
      </div>
      <p>
        {/* {pokemonList.map((pokemon)=>{

      })} */}
      </p>
      <div>
        <button onClick={addPokemonQuery}><p>ADD Pokemon</p></button>
      </div>
    </div>
  )
}

export default App

