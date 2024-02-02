import { useEffect, useState } from "react";
import axios from "axios";
import './Body.css';
import SearchComponent from "../SearchComponent/SearchComponent";
import { useSelector, useDispatch } from 'react-redux'
import Card from "./Card";

    const Body = () => {
    const [results, setResults] = useState([]);
    const [inicio, setInicio] = useState([]);
    //const [fontsLoaded, setFontsLoaded] = useState(true);
    const [search, setSearch] = useState("");

    const counter = useSelector(state => state.counter)

    const loadData = async () => {
        try {
        const response = await axios.get('http://localhost:3000/api/publicacionreveslimited');
        setResults(response.data.rows);
        setInicio(response.data.rows);
        } catch (error) {
        console.error('Error al cargar los datos:', error);
        }
    };

   /* const authorStyle = {
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
*/

    const filter = {
        backgroundColor: 'red',
        with: '100vw',
        heigth: '100vh'
    }

    useEffect(() => {
        loadData();
    }, [])

   /* const searcher = (event) => {
        const searchTerm = event.target.value;
        setSearch(searchTerm);

        // Filtra los resultados basándonos en el término de búsqueda
        const filteredResults = inicio.filter((item) =>
        item.content_title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setResults(filteredResults);
    };*/

    return (
        <main>
            <div style={counter ? {} : filter}></div>
            <div className="main-line">
                <p>Explore Technology </p>
                <hr />
            </div>
            <div className="outter-div">
                {
                    results.map((item) => (
                        <div key={item.content_id} className="main-div">
                            <div className="main-image">
                                <img src='https://i.postimg.cc/dVYmj3xj/header-blog-chatgpt-vs-bard.jpg' alt="" className="inner-main-div-imagen" />
                            </div>
                            <h2  className="card-author">{item.content_author}</h2>
                            <h3 className="card-title">{item.content_title}</h3>
                            <p className="card-text">{item.content_parrafo}</p>
                        </div>
                    ))

                }
            </div>
            <div className="card-div">
            {results.map((item) => (
                <Card item={item} key={item.content_id} />
            ))}
            </div>
        </main>
    );
    };

export default Body
