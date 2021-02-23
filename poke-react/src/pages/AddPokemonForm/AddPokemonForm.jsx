import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react'

import './AddPokemonForm'

import pokemonTypesList from '../../api/pokemonTypesList'
// import PaintPokemonAdded from '../../components/PaintPokemonAdded/PaintPokemonAdded';



function AddPokemonForm() {

    const [pokemonTypeOne, setTypeOne] = useState('')
    const [pokemonTypeTwoList, setTypeTwoList] = useState([])
     
    const [pokemonAddedList, setPokemonAdded] = useState ([])


    const handleFirstType = event => setTypeOne(event.target.value)

  useEffect(() => {
      
    const pokemonTypesListWithoutFirstSelect  = pokemonTypesList.filter(function(item) {
        return item !== pokemonTypeOne
    })
    setTypeTwoList(pokemonTypesListWithoutFirstSelect)

  }, [pokemonTypeOne]);


    const { register, handleSubmit, errors } = useForm();


    

    function handleSubmitForm(values) {
        //const formattedValues = values.toLowerCase()


         setPokemonAdded(prevList => [...prevList, values])

         console.log("pokemonAddedList " ,pokemonAddedList)

    }


    return (

        <div className="pokemonFormContainer">
            <form id="pokemonForm" onSubmit={handleSubmit(handleSubmitForm)}>
                <label htmlFor="id">Id</label>
                <input
                    placeholder="Escribe el Id de tu Pokemon"
                    id="id"
                    name="id"
                    type="number"
                    ref={register({
                        required: true,
                    })}
                />
                <label htmlFor="name">Name</label>
                <input
                    placeholder="Escribe el nombre de tu Pokemon"
                    id="name"
                    name="name"
                    type="text"
                    ref={register({
                        required: true,
                        minLength: 2
                    })}
                />
                <label htmlFor="image">Image</label>
                <input
                    placeholder="Escribe el link a la foto del Pokemon"
                    id="image"
                    name="image"
                    type="text"
                    ref={register({
                        required: true,
                    })}
                />
                <label htmlFor="typeOne">Choose a type for your pokemon:</label>
                <select name="typeOne" ref={register({ required: true })} onChange={handleFirstType}>
                    {pokemonTypesList.map((type) => (
                        <option
                            value={type}
                            key={type}
                        >{type}
                        </option>
                    ))}</select>

                <label htmlFor="typeOne">Choose a second type for your pokemon:</label>

                <select name="typeTwo" ref={register({ required: false })}>
                    {pokemonTypeTwoList.map((type) => (
                        <option
                            value={type}
                            key={type}
                        >{type}
                        </option>
                    ))}</select>


                <button onClick={handleSubmitForm}>Submit</button>

            </form>
        </div>
    )
}

export default AddPokemonForm