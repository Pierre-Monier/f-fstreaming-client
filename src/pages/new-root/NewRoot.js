import React from 'react';
import Root from '../../components/root/Root';
import { MoviesProvider } from '../../services/movies/Movies';
import Login from '../login/Login';

const NewRoot = ({isChecked}) => {
    if(isChecked){
        return(
            <MoviesProvider>
                <Root/>
            </MoviesProvider>
        )
    }else{
        return <Login msg={true}/>;
    }
}

export default NewRoot;