// MenuHamburguesa.js
import { useState, useEffect } from 'react';
import Mobile from './Menu/Mobile';
import Desktop from './Menu/Desktop';
import './Menu.css';

const Menu = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="menu-container">
            {windowWidth <= 991 && ( // Muestra el menú de hamburguesas solo si el ancho de la pantalla es menor o igual a 768px
                <Mobile />
            )}

            {windowWidth >= 992 && ( // Muestra el menú de hamburguesas solo si el ancho de la pantalla es menor o igual a 768px
                <Desktop />
            )}
        </div>
    );
};

export default Menu;
