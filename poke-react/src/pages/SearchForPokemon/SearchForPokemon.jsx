import { useEffect, useState, useContext } from 'react'
import getPokemon from '../../api/getPokemon'
import PaintPokemon from '../../components/PaintPokemon/PaintPokemon'
import { PokemonContext } from '../../createContext'


function SearchForPokemon({ setList, list }) {

  const { pokemonList } = useContext( PokemonContext )

    const [pokemonQuery, setQuery] = useState('')

    const handlePokemonQuery = event => setQuery(event.target.value)

    //remove pokemonQuery en input after ADD button.
    const removeInputText = () => {
        setQuery('')
    }


    useEffect(() => {
        let id = setTimeout(async () => {



            const pokemon = pokemonQuery && await getPokemon(pokemonQuery)

            console.log('ha pasado 1.5sg')
            console.log(pokemon)
            setList((pokemonList) => {
                return [...pokemonList, pokemon]
            })
            removeInputText()

        }, 1500)

        return () => clearTimeout(id)

    }, [pokemonQuery]);



    return (
        <div>
            <div className="inputPokemonContainer">
                <input className="inputQuery" onChange={handlePokemonQuery} value={pokemonQuery} placeholder="Search for a Pokemon" />
            </div>
            <div id="cardsContainer">
                <PaintPokemon list={ pokemonList } />
            </div>
        </div>
    )
}

export default SearchForPokemon