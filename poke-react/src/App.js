import { useEffect, useState } from 'react'


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
  const [pokemonList, setPokemonList] = useState([])

  //Evento para capturar el input de la query.

  const handlePokemonQuery = event => setQuery(event.target.value)


  const getPokemon = (pokemonItem, list, setFunction) => {

    console.log("get pokemon =>", pokemonItem)

    const pokemonFormatted = pokemonItem.toLowerCase()

    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonFormatted}`

    console.log(pokemonFormatted)

    if(pokemonItem!==''){
      fetch(url, { method: 'GET' })
      .then((res) => res.json())
      .then((result) => {

        //Aquí debemos poner un control de pokemon existente o error de la api?

       const isRepeated = list.some((pokemon)=>{
         return pokemon.name === result.name
       })

       isRepeated ? alert('Pokemon está ya en la lista') : setFunction([...list,result])
       console.log(result)
      })
      
      .catch((error) => {
        //alert('Pokemon no existe')
        console.log("catch error del fetch")
      })
    }
  }

  //remove pokemonQuery en input after ADD button.
  const removeInputText = () => {
    setQuery('')
  }


  useEffect(() => {
      let id = setTimeout(()=>{
        getPokemon(pokemonQuery, pokemonList, setPokemonList)
        console.log('ha pasado 1.5sg')
      },1500)

      return () => clearTimeout(id)      
  
    },[pokemonQuery]);



  


console.log(pokemonList)
  return(
    <div>
      <p>hola</p>
      <div class="inputPokemon">
        <input onChange={handlePokemonQuery} value={pokemonQuery} />
      </div>
      <div id="cardsContainer">
        {
        pokemonList.map((pokemonToPaint, index)=>{
          <div id="pokemonCard">
            <div>
              <p key={index}>{pokemonToPaint.name}</p>
            </div>
          </div>
        })
        }
      </div>
      <div>
        {/* <button onClick={addPokemonQuery}><p>ADD Pokemon</p></button> */}
      </div>
    </div>
  )
}

export default App