import { BiLogOut } from 'react-icons/bi'
import { Link } from 'react-router-dom'

import { auth } from '../../services/firebaseConnection'
import { signOut } from 'firebase/auth'

import './header.css'

export function Header(){

    async function handleLogout(){
        await signOut(auth)
    }

    return(
        <header className="admin-header">
            
            <nav className="navbar-header">
                <button onClick={handleLogout}><BiLogOut size="28" color="#C51D1D"/></button>

                <Link to="/admin">
                    Links
                </Link>

                <Link to="/admin/social">
                    Redes Sociais
                </Link>
            </nav>

        </header>
    )
}