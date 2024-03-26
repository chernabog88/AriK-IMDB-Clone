import './index.css';
import { useEffect, useState } from 'react';
import { Movies } from '../../assets/data.js';

function Home() {

    const [movies, setMovies] = useState([]);

    /*     const getData = async (params) => {
            const movieData = await Movies(params);
            setMovies(movieData);
        } */

    useEffect(() => {
        /*         getData(); */
    }, []);

    return (
        <>
            <div>
                <h1>Body</h1>
                <h1>Body</h1>
            </div>
        </>
    );
}

export { Home };