import { useState } from 'react';
import IconoLogo from '../../../../public/full-logo.png'
import './Mobile.css'

const Mobile = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <div className="menu-container">
            <img src={IconoLogo} alt="" />
            <div className={`menu-hamburguesa ${menuVisible ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            {menuVisible && (
                <div className="menu-items">
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
                        <button>Buscar
                        </button>
                        <button>Contactenos</button>
                        <button>Contactenos</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Mobile;