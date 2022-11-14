import './admin.css'
import { useState } from 'react'
import { Header } from '../../components/Header'
import { Logo } from '../../components/Logo'
import { Input } from '../../components/Input'

import { MdAddLink } from 'react-icons/md'
import { FiTrash2 } from 'react-icons/fi'
import { async } from '@firebase/util'

import { toast } from 'react-toastify'

export default function Admin(){

    const [ nameLink, setNamelink ] = useState("");
    const [ urlLink, setUrllink] = useState("");
    const [bgColorInput, setBgcolorInput ] = useState("#f1f1f1");
    const [ textColorInput, setTextColorInput ] = useState("#000000");

    async function handleRegister(e){
        e.preventDefault();

        if( nameLink == '' || urlLink == '' || bgColorInput == '' || textColorInput == ''){
            toast.error("Por favor prencha todos os campos");
        }else{
            toast.success("Link cadastrado com sucesso");
        }

    }

    return(
        <div className="admin-container">
            <Header/>
            <Logo/> 

            <form className="form" onSubmit={handleRegister}>
                <label className="label">Nome do link:</label>
                <Input type="text" 
                value={nameLink}
                onChange={ (e) => setNamelink(e.target.value) }
                placeholder="Nome do link" />

                <label className="label">URL do link:</label>
                <Input type="url"
                value={urlLink}
                onChange={ (e) => setUrllink(e.target.value) } 
                placeholder="URL do link" />

                <section className='container-colors'>
                    
                    <div>
                    <label className="label rigth">Fundo link</label>
                    <input type="color"
                    value={bgColorInput}
                    onChange={ (e) => setBgcolorInput(e.target.value) }
                    />
                    </div>

                    <div>
                    <label className="label rigth">Cor do link</label>
                    <input type="color"
                    value={textColorInput}
                    onChange={ (e) => setTextColorInput(e.target.value) }
                    />
                    </div>

                </section>
                
                { nameLink !== '' && (

                    <><h2 className="title">Previa do seu link</h2>
                    <article className="list animate-pop"
                        style={{ backgroundColor: bgColorInput }}>
                        <p style={{ color: textColorInput }}>{nameLink}</p>

                    </article></>
                )}

                <button type="submit" className="btn-register">
                    Salvar link <MdAddLink size={24} color="#ffffff"/>
                </button>
            </form>

            <h2 className="title">Meus links</h2>

            <article className="list animate-pop" 
            style={{ backgroundColor: "#262530", color: "#ffff" }}>
                <p>Meu link de teste</p>
                <div>
                    <button className="btn-delete">
                        <FiTrash2 size={18} color="#ffffff"/>
                    </button>
                </div>
            </article> 

        </div>
    )
}