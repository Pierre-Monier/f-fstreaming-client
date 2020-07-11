import React, { useEffect, useState } from 'react';
import { useMovies } from '../../services/movies/Movies';
import Thumb from '../thumb/Thumb';
import Grid from '@material-ui/core/Grid';
import Loading from '../loading/Loading';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { trackWindowScroll } from 'react-lazy-load-image-component';
const Root = ({scrollPosition}) => {
    
    const movies = useMovies();
    const [loading, setLoading] = useState(true);
    const [thumbs, setThumbs] = useState(null);
// °°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°
    // useEffect(() => {
    //     store.dispatch({type: "CLEAR"})
    // }, []);
// °°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°
    useEffect(() => {
        const createThumbs = data => {
            const thumbs = Object.keys(data).map( item => 
            <LazyLoadComponent key={data[item].id} scrollPosition={scrollPosition}>
                <Thumb  data={data[item]} movie={true}/>
            </LazyLoadComponent> 
            );

            return thumbs;   
        }
        if(movies){
            setLoading(false)
            setThumbs(createThumbs(movies))
        }
    }, [movies, scrollPosition]);
// °°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°   
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°   
    return (
            <Grid container className="mt-container">
            { loading ? <Loading big={true}/> : thumbs }
            </Grid>
  );
}

export default trackWindowScroll(Root);