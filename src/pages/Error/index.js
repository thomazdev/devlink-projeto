import './error.css'

import { Logo } from '../../components/Logo';

export default function Error(){
    return(
        <div className='error'>
            <Logo/>
            <h1>Pagina não encontrada...</h1>
            <p>Esta pagina esta procurando, não existe...</p>
            
        </div>
    )
}