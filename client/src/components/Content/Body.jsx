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
    const authorStyle = {
        fontFamily: fontsLoaded ? 'Quicksand, sans-serif' : 'serif',
        fontWeight: '600',
        fontSize: '18px',
        marginBottom:'16px'
    };
    const titleStyle = {
        fontFamily: fontsLoaded ? 'Quicksand, sans-serif' : 'serif',
        fontWeight: '600',
        fontSize: '20px',
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
            <div className="explore-techonology">
                <div className="inner-explore-tech">
                    <h2 style={titleStyle}>Explore Technology </h2>
                </div>
            </div>
        <div className="outter-div">

        {
            inicio.map(item => (
            
                <div key={item.content_id} className="main-div">
                    <div className="inner-main-div">
                        <img src={item.content_image} alt="" className="inner-main-div-imagen"/>
                        <h2 style={authorStyle} className="">{item.content_author}</h2>
                        <h3 style={titleStyle}>{item.content_title}</h3>
                        <p style={contentStyle}>{item.content_summary}</p>
                    </div>
                </div>


            ))
        }

        {
            inicio.map(item => (
                <div key={item.content_id} className="extra-blogs">
                    <div className="inner-extra-blogs">
                        <h2 style={authorStyle}>{item.content_author}</h2>
                        <h3 style={titleStyle}>{item.content_title}</h3>
                        <p style={contentStyle}>{item.content_summary}</p>
                    </div>
                </div>
            ))
        }


        </div>
        </>
    )
}

export default Body