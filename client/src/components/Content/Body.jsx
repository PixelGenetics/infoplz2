import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import Card from './Card'
import './Body.css'

const Body = () => {
    const [results, setResults] = useState([]);

    const counter = useSelector(state => state.counter)
    const menuDispatch = useSelector(state => state.menu)

    const loadData = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/publicacionreveslimited')
            setResults(response.data.rows)
        } catch (error) {
            console.error('Error al cargar los datos:', error);
        }
    }

    const filter = {
        backgroundColor: "transparent",
        width: '100%',
        height: '100vh',
    }

    useEffect(() => {
        loadData();
    }, [])

    /**  Margen cuando baja el menú hamburgesa **/
    const marginTop1 = {
        marginTop: '310px'
    }

    const marginTop2 = {
        marginTop: '0px'
    }

    return (
        <main style={menuDispatch ? marginTop2 : marginTop1}>
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
