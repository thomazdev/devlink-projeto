import { Link } from 'react-router-dom';
import './logo.css';

export function Logo(){
    return(
        <Link to='/'>
            <h1 className='logo'>Dev<strong>Link</strong></h1>
        </Link>      
    )
}