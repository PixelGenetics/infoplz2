import { useEffect,useState } from "react"
import LoadFonts from "../Config/LoadFonts"
import './Header.css'
import axios from "axios"

const Header = () =>{        
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const [articulo,setArticulo] = useState([]);
    const [search,setSearch] = useState("");

    useEffect(() => {
        axios.get('http://localhost:3000/api/publicacionreveslimited').then(resp => {
            setSearch(resp.data.rows)
        });
    }, []);

    //Funcion de busqueda
    const searcher = (e) => {
        setSearch(e.target.value)
        console.log(e.target.value)
    }

    useEffect(() => {
        LoadFonts(() => {
        setFontsLoaded(true);
        })
    })

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
            <ul>
                <button style={titleStyle}><li><a href="">Logo</a></li></button>
                <button style={titleStyle}><li><a href="">Explore</a></li></button>
                <button style={titleStyle}><li><a href="">Software Dev</a></li></button>
                <button style={titleStyle}><li><a href="">Cloud</a></li></button>
                <button style={titleStyle}><li><a href="">IT Ops</a></li></button>
                <button style={titleStyle}><li><a href="">Data</a></li></button>
                <button style={titleStyle}><li><a href="">Security</a></li></button>
                <button style={titleStyle}><li><a href="">Leadership</a></li></button>
            </ul>
        </div>
        <div className='inner-header-component-2'>
            <ul>
                <button style={titleStyle}><li><a>Lupa</a></li></button>
                <input  value={search} onChange={searcher} type="text" className=""/>
                <button style={titleStyle}><li><a href="">Contact Sales</a></li></button>
                <button style={titleStyle}><li><a href="">View Plans</a></li></button>
            </ul>
        </div>

    </div>
    </>
    )
}

export default Header