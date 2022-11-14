import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import './login.css'

import { Logo } from '../../components/Logo'
import { Input } from '../../components/Input'

import { auth } from '../../services/firebaseConnection'
import { signInWithEmailAndPassword } from 'firebase/auth'

export default function Login(){

    const [email, setEmail] = useState("");
    const [ password, setPassword] = useState("");

    const navigate = useNavigate();

    function login(e){

        e.preventDefault();

        if(email === ''|| password === ''){
            toast.error("Prencha todos os campos");
            return;
        }

        signInWithEmailAndPassword(auth, email, password)
        .then( (user) =>{

            navigate("/admin", { replace: true } );
            toast.success("Bem vindo de Volta 😃");
            console.log(user);
            
        })
        .catch( () =>{
            toast.error("Erro ao fazer login..");
            console.log("Erro ao fazer login...");
        })
    }

    return(
        <div className='login-container'>

            <Logo/>

            <form className='form-login' onSubmit={login}>

                <Input type="email"
                name="email" 
                placeholder="E-mail" 
                value={email}
                onChange={ (e) => setEmail(e.target.value) }/>

                <Input type="password"
                name="pass" 
                autoComplete="on" 
                placeholder="Sua senha" 
                value={password} 
                onChange={ (e) => setPassword(e.target.value) }
                />

                <button type="submit">Acessar</button>
            </form>

        </div>
    )
}