import IconoLogo from '../../../../public/full-logo.png'
import { IoSearchSharp } from 'react-icons/io5'
import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import './Desktop.css'

const Desktop = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className='header'>
                <div className='logo'>
                    <img src={IconoLogo} alt='Logo' />
                </div>
                <nav className='menu'>
                    <ul>
                        <li>Política</li>
                        <li>Accidentes</li>
                        <li>Cultura</li>
                        <li>Internacionales</li>
                        <li>Tecnología</li>
                    </ul>
                </nav>
                <div className='botones'>
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <IoSearchSharp />
                    </button>
                    <button>Contactenos</button>
                    <button>Inglés</button>
                </div>
            </div>
            {
                isOpen && (
                    <>
                        <hr className='hr'/>
                        <div className='search'>
                            <IoSearchSharp />
                            <input type="text" placeholder='¿Qué deseas encontrar?' />
                            <IoClose />
                        </div>
                    </>
                )
            }
        </>
    )
}

export default Desktop