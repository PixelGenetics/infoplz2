import { useEffect, useState } from "react";
import axios from "axios";
import LoadFonts from "../Config/LoadFonts";
import './SearchComponent.css'

    const SearchComponent = () => {
    const [results, setResults] = useState([]);
    const [inicio, setInicio] = useState([]);
    const [fontsLoaded, setFontsLoaded] = useState(true);
    const [search, setSearch] = useState("");
    const [boton,setBoton] = useState(false);
    
    
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
        marginTop: '16px',
    };
    const contentStyle = {
        fontFamily: fontsLoaded ? 'Lato, sans-serif' : 'serif',
        fontWeight: '300',
        fontSize: '18px',
        marginTop: '16px',
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

    const mostrarInput = () => {
        if(boton){  
            return (
            <div className="class-input">
                <input value={search} onChange={searcher} type="text" />
            </div>
            )
        }
    }

    const mostrar = () =>{
        
        if(boton){
            return results.map((item) => (
                <div key={item.content_id} className="SearchComponent-main-div">
                        <a href="">
                            <div className="">
                            <h3 style={titleStyle}>{item.content_title}</h3>
                            <p style={contentStyle}>{item.content_summary}</p>
                            </div>
                        </a>
                </div>
                ))
        }else return null;
    }



    return (
        <>
        <button onClick={() => setBoton((estadoAnterior) => !estadoAnterior)}>Buscador</button>
        {
            mostrarInput()
        }
        {
            mostrar()
        }
        </>
    );
    };

export default SearchComponent;
