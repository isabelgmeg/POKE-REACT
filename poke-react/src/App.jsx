import { Switch, Route, Redirect } from 'react-router-dom'
import { useState } from "react"


import './App.css'
import AddPokemonForm from './pages/AddPokemonForm/AddPokemonForm'
import Header from './components/Header/Header'
import SearchForPokemon from './pages/SearchForPokemon/SearchForPokemon'
import { PokemonContext } from './createContext'

export const App = () => {



  const [pokemonList, setPokemonList] = useState([])
  console.log("pokemonList ", pokemonList)


  return (
    <div id="mainContainer">

      <Header />
      <div>

        <PokemonContext.Provider value={{ pokemonList, setPokemonList }}>
        <Switch>

          {/* home route */}
          <Route exact path="/">
            <SearchForPokemon setList={ setPokemonList } list={ pokemonList }/>
          </Route>

          <Route exact path="/new">
            <AddPokemonForm />
          </Route>

          <Redirect to="/" />
        </Switch>

      </PokemonContext.Provider>


      </div>


    </div>
  )

}

export default App