
import './PaintPokemon.css'

function PaintPokemon({ list }) {
  return (
    <>
      <ul className="list">
        {list.map((pokemonItem) => (
          <li key={pokemonItem.id} className="card">
            <p className="card__name">{pokemonItem?.name}</p>
            <img className="card__image" src={pokemonItem?.sprites?.front_default} alt={pokemonItem?.name} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default PaintPokemon;