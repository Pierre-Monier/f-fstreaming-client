import React from 'react';
import SingleSerie from '../../components/single-serie/SingleSerie';
import { SerieProvider } from '../../services/series/Series';
import Login from '../../pages/login/Login';

const NewSingleSerie = ({isChecked}) => {
    if(isChecked){
        return(
            <SerieProvider>
                <SingleSerie/>
            </SerieProvider>
        )
    }else{
        return <Login msg={true}/>
    }
}

export default NewSingleSerie;