import React, { useState, useEffect, createContext, useContext } from 'react';
import { fetchData, signal } from '../../utils/utils';
import { useParams } from 'react-router-dom';


export const moviesContext = createContext({
   movies: null,
});

export const onemovieContext = createContext({
    movie: null,
 });

export const useMovies = () => {

    const movies = useContext(moviesContext);
    return  movies;

}

export const useOneMovie = () => {

    const movie = useContext(onemovieContext);
    return  movie;

}

// hook du composant MoviesProvider
const useData = multiple =>{
    const [movies, setMovies] = useState(null);
    const {id} = useParams() 
    useEffect(() => {
        if(id && !multiple){
            fetchData(`${process.env.REACT_APP_API_MOVIE}/${id}`, { signal: signal.signal }).then(res => {
                setMovies({...res}); 
            })
        }else if(multiple){
            fetchData(process.env.REACT_APP_API_MOVIE, { signal: signal.signal }).then(res => {
                setMovies({...res}); 
            })
        }
        return () => {
            // cleanup
            signal.abort();
        };
    }, [id, multiple]);

    return movies;
        
}


// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// Provider
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
export const MoviesProvider = (props) => {
    const movies = useData(true)
    const { children } = props;
    return (
      <moviesContext.Provider value={movies}>
        {children}
      </moviesContext.Provider>
    );
} 

// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// Provider
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
export const MovieProvider = (props) => {
    const movie = useData(false)
    const { children } = props;
    return (
      <onemovieContext.Provider value={movie}>
        {children}
      </onemovieContext.Provider>
    );
} 