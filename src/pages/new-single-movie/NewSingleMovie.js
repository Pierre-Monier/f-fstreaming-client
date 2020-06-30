import React from 'react';
import SingleMovie from '../../components/single-movie/SingleMovie';
import { MovieProvider } from '../../services/movies/Movies';
import Login from "../login/Login";

const NewSingleMovie = ({isChecked}) => {
    if(isChecked){
        return(
            <MovieProvider>
                <SingleMovie/>
            </MovieProvider>
        )
    }else{
        return <Login msg={true}/>;
    }
}

export default NewSingleMovie;