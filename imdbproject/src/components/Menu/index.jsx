import './index.css';
/* import logo from ''; */
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <>
            <nav>
                <h1 className='menu-text'>Test Menu</h1> <input className='menu-bar' type="text" />
            </nav>
            {/*             <nav style={{ margin: 10 }}>
                <div>
                    <img src={logo} alt="logo de trainers" className='logo-img' />
                </div>
                <ul className='nav-items'>
                    <Link to="/" className='nav-link'>
                        Inicio
                    </Link>
                    <Link to="/new-trainer" className='nav-link'>
                        Registro entrenador
                    </Link>
                    <Link to="/about" className='nav-link'>
                        Acerca de nosotros
                    </Link>
                </ul>
            </nav> */}
        </>
    );
}

export { Menu };