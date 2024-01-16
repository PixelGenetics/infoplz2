import { useEffect,useState } from "react"
import LoadFonts from "../Config/LoadFonts"
import './Header.css'
import axios from "axios"
import SearchComponent from "../SearchComponent/SearchComponent"


const Header = () =>{        
    const [fontsLoaded, setFontsLoaded] = useState(false);
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

    return(

    <>
    <div className='header-component'>
        <div className='inner-header-component'>
            <div>
                <ul>
                    <button style={titleStyle}><li><a href="">Logo</a></li></button>
                </ul>
            </div>
            <div>
                <ul>
                <button><li><SearchComponent /></li></button>
                <button style={titleStyle}><li><a href="https://portfolio-delta-peach-43.vercel.app/">Portafolio</a></li></button>
                <button style={titleStyle}><li><a href="http://localhost:5173/upload">Upload Post</a></li></button>
                </ul>
            </div>
        </div>

    </div>
    </>
    )
}

export default Header