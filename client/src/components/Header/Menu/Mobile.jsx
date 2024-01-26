import { useState } from 'react'
import { IoSearchSharp } from 'react-icons/io5'
import { IoClose } from 'react-icons/io5'
import IconoLogo from '../../../../public/full-logo.png'
import './Mobile.css'

const Mobile = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <div className="menu-container-movil">
            <img src={IconoLogo} alt="" />
            <div className={`menu-hamburguesa ${menuVisible ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            {menuVisible && (
                <div className={`menu-items ${menuVisible ? 'open' : ''}`}>
                    <div className='search'>
                            <IoSearchSharp />
                            <input type="text" placeholder='¿Qué deseas encontrar?' />
                            <IoClose />
                        </div>
                    <nav className='menu'>
                        <ul>
                            <li>Politica</li>
                            <li>Accidentes</li>
                            <li>Cultura</li>
                            <li>Internacionales</li>
                            <li>Tecnología</li>
                        </ul>
                    </nav>
                    <div className='botones'>
                        <button>Contactenos</button>
                        <button>Contactenos</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Mobile;