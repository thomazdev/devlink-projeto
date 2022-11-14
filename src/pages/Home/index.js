import './home.css'
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp, FaLinkedin, FaTelegram } 
from 'react-icons/fa'

import { Social } from '../../components/Social'

export default function Home(){
    return(
        <div className='home-container'>
            
            <h1>Luizdev - Programação & Design</h1>
            <span>Veja meus links abaixo 👇</span>

            <main className='links'>

                <section className='link-area'>
                    <a href='#'>
                        <p className='link-text'>Meu canal no Youtube</p>
                    </a>
                </section>

                <section className='link-area'>
                    <a href='#'>
                        <p className='link-text'>Meu Ebook gratuito </p>
                    </a>
                </section>

                <section className='link-area'>
                    <a href='#'>
                        <p className='link-text'>Meu WhatsApp</p>
                    </a>
                </section>

                <footer>

                    <Social url='https://www.facebook.com/' title="Facebook">
                        <FaFacebook size={35} color="#ffffff"/>
                    </Social>

                    <Social url='https://www.facebook.com/' title='Instagram'>
                        <FaInstagram size={35} color="#ffffff"/>
                    </Social>

                    <Social url='https://www.facebook.com/' title='Youtube'>
                        <FaYoutube size={35} color="#ffffff"/>
                    </Social>

                    <Social url='https://www.facebook.com/' title='Whatsapp'>
                        <FaWhatsapp size={35} color="#ffffff"/>
                    </Social>

                    <Social url='https://www.facebook.com/' title='Linkedin'>
                        <FaLinkedin size={35} color="#ffffff"/>
                    </Social>

                    <Social url='https://www.facebook.com/' title='Telegram'>
                        <FaTelegram size={35} color="#ffffff"/>
                    </Social>

                </footer>

            </main>

        </div>
    )
}