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
        <div className='menu-container'>
            { windowWidth <= 991 && <Mobile /> }
            { windowWidth >= 992 && <Desktop /> }
        </div>
    );
};

export default Menu;
