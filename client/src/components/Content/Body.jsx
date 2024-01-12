import { useEffect,useState } from "react"
import axios from "axios"
import LoadFonts from "../Config/LoadFonts"
import './Body.css'

const Body = () =>{

    const [inicio,setInicio] = useState([])
    const [pagina,setPagina] = useState([])
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:3000/api/publicacionreveslimited').then(resp => {
            setInicio(resp.data.rows)
        });
    }, []);
    
    useEffect(() => {
        LoadFonts(() => {
        setFontsLoaded(true);
        })
    })

    const titleStyle = {
        fontFamily: fontsLoaded ? 'Quicksand, sans-serif' : 'serif',
        fontWeight: '600',
        fontSize: '36px',
        marginBottom:'16px'
    };

    const contentStyle = {
        fontFamily: fontsLoaded ? 'Lato, sans-serif' : 'serif',
        fontWeight: '300',
        fontSize:'18px',
        marginBottom:'16px'
    };

    return(
        <>
        <div className="flex">
        {
            inicio.map(item => (
            
                <div key={item.content_id} className="main-div">
                    <div className="inner-main-div">
                        <img src={item.content_image} alt="" className=""/>
                        <h2 className="" style={titleStyle}>Author: {item.content_author}</h2>
                        <p className="" style={contentStyle}>{item.content_summary}</p>
                    </div>
                </div>
            ))
        }
        </div>
        </>
    )
}

export default Body