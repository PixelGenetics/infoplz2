import IconoLogo from '../../../../public/full-logo.png'
import { IoSearchSharp } from "react-icons/io5";
import './Desktop.css'

const Desktop = () => {
    return (
        <div className="header">
            <div className='logo'>
                <img src={IconoLogo} alt="" />
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
                <button>
                    <IoSearchSharp />
                </button>
                <button>Contactenos</button>
                <button>Contactenos</button>
            </div>
        </div>
    )
}

export default Desktop;