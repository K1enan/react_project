import React from 'react';
import { Link} from 'react-router-dom';
import './Style.css';

const Header = () => {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <ul className='navbar-nav'>               
                    <li className='nav-item' style={{ fontWeight:'bold' }}> <Link className="nav-link" to="/">Navbar</Link>     </li> 
                    <li className='nav-item'> <Link className="nav-link" to="/home">Home</Link>     </li>
                    <li className='nav-item'> <Link className="nav-link" to="/person">Person</Link>   </li>
                    <li className='nav-item'> <Link className="nav-link" to="/crud">Crud</Link>      </li>
                    <li className='nav-item'> <Link className="nav-link" to="/about">About Us</Link> </li>                                      
            </ul>
            
        </nav>
    );
};

export default Header;