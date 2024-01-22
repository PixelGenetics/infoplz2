//import { useState } from "react"
//import LoadFonts from "../Config/LoadFonts"
import './Header.css'
/*import { IoSearchSharp } from "react-icons/io5";
import IconoLogo from '../../../public/full-logo.png'*/
import Menu from "./Menu";
//import axios from "axios"
// import SearchComponent from "../SearchComponent/SearchComponent"
// import zoom from "../../assets/zoom-svgrepo-com.svg"


const Header = () =>{
 /*   const [menuVisible, setMenuVisible] = useState(true);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };*/

   /* const [fontsLoaded, setFontsLoaded] = useState(false);
    const [data,setData] = useState([]);
    const [mostrarMenu,setMostrarMenu] = useState(false);
    const [keyword, setKeyword] = useState("");

    const getData = async () => {
        try{
            const response = await axios.get('http://localhost:3000/api/publicacionreveslimited');
            setData(response.data.rows);
        }catch{
            console.error('Error al mostrar datos', error);
        }
    }

    const searcher = (event) => {
        const searchTerm = event.target.value;
        setSearch(searchTerm);

        // Filtra los resultados basándonos en el término de búsqueda
        const filteredResults = inicio.filter((item) =>
        item.content_title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setResults(filteredResults);
    };

    useEffect(() => {
        LoadFonts(() => {
        setFontsLoaded(true);
        })
    })

    const toggleMenu = () => {
        setMostrarMenu(!mostrarMenu);
    }

    const titleStyle = {
        fontFamily: fontsLoaded ? 'Quicksand, sans-serif' : 'serif',
        fontWeight: '500',
        fontSize: '14px',
    };

    const contentStyle = {
        fontFamily: fontsLoaded ? 'Lato, sans-serif' : 'serif',
        fontWeight: '300',
        fontSize:'18px',
    };
*/
    return(
        <>
        <Menu />
           {/*  <div className="menu-container">
                <img src={IconoLogo} alt="" />
                <div className={`menu-hamburguesa ${menuVisible ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                {menuVisible && (
                    <div className="menu-items">
                        <nav className='bg-red-500 menu'>
                            <ul>
                                <li>Politica</li>
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
                )}
            </div>*/ }
           {/* <div className="header">
                <div className='logo'>
                    <img src={IconoLogo} alt="" />
                </div>
                <nav className='bg-red-500 menu'>
                    <ul>
                        <li>Politica</li>
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
            </div>*/ }
        </>
    )
}

export default Header