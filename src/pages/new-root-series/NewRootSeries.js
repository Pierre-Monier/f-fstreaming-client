import React from 'react';
import RootSeries from '../../components/root-series/RootSeries';
import { SeriesProvider } from '../../services/series/Series';
import Login from '../../pages/login/Login';

const NewRoot = ({isChecked}) => {
    if(isChecked){
        return(
            <SeriesProvider>
                <RootSeries/>
            </SeriesProvider>
        )
    }else{
        return <Login msg={true}/>
    }
}

export default NewRoot;