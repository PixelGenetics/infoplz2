import { useEffect, useState } from "react";
import axios from "axios";
import LoadFonts from "../Config/LoadFonts";
import './Body.css';
import SearchComponent from "../SearchComponent/SearchComponent";

    const Body = () => {
    const [results, setResults] = useState([]);
    const [inicio, setInicio] = useState([]);
    const [fontsLoaded, setFontsLoaded] = useState(true);
    const [search, setSearch] = useState("");

    const loadData = async () => {
        try {
        const response = await axios.get('http://localhost:3000/api/publicacionreveslimited');
        setResults(response.data.rows);
        setInicio(response.data.rows);
        } catch (error) {
        console.error('Error al cargar los datos:', error);
        }
    };

    const authorStyle = {
        fontFamily: fontsLoaded ? 'Quicksand, sans-serif' : 'serif',
        fontWeight: '600',
        fontSize: '18px',
        marginBottom: '16px',
    };
    const titleStyle = {
        fontFamily: fontsLoaded ? 'Quicksand, sans-serif' : 'serif',
        fontWeight: '600',
        fontSize: '20px',
        marginBottom: '16px',
    };
    const contentStyle = {
        fontFamily: fontsLoaded ? 'Lato, sans-serif' : 'serif',
        fontWeight: '300',
        fontSize: '18px',
        marginBottom: '16px',
    };

    useEffect(() => {
        loadData();
        LoadFonts(() => {
        setFontsLoaded(true);
        });
    }, []);

    const searcher = (event) => {
        const searchTerm = event.target.value;
        setSearch(searchTerm);

        // Filtra los resultados basándonos en el término de búsqueda
        const filteredResults = inicio.filter((item) =>
        item.content_title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setResults(filteredResults);
    };

    return (
        <>

        <div className="explore-techonology">
            <div className="inner-explore-tech">
            {/* <input value={search} onChange={searcher} type="text" /> */}
            <h2 style={titleStyle}>Explore Technology </h2>
            </div>
        </div>
        {/* Componente importado: SearchComponent */}
        {/* <SearchComponent /> */}
        <div className="outter-div">
            {results.map((item) => (
            <div key={item.content_id} className="main-div">
                <div className="inner-main-div">
                <img src={item.content_image} alt="" className="inner-main-div-imagen" />
                <h2 style={authorStyle} className="">
                    {item.content_author}
                </h2>
                <h3 style={titleStyle}>{item.content_title}</h3>
                <p style={contentStyle}>{item.content_summary}</p>
                </div>
            </div>
            ))}
            {results.map((item) => (
            <div key={item.content_id} className="extra-blogs">
                <div className="inner-extra-blogs">
                <h2 style={authorStyle}>{item.content_author}</h2>
                <h3 style={titleStyle}>{item.content_title}</h3>
                <p style={contentStyle}>{item.content_summary}</p>
                </div>
            </div>
            ))}
        </div>
        </>
    );
    };

export default Body;
