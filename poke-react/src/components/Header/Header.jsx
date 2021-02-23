import './Header'
import { Link } from 'react-router-dom'


function Header() {
    return (
        <div id="header">
            <h1>PokeApi</h1>
            <div>

            <Link to="/new">Create your pokemon!</Link>
            <Link to="/">Search for a Pokemon!</Link>

            </div>
        </div>
    )
}

export default Header