import React, { useEffect, useState, useRef } from 'react';
import { useMovies } from '../../services/movies/Movies';
import Thumb from '../thumb/Thumb';
import Grid from '@material-ui/core/Grid';
import Loading from '../loading/Loading';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { trackWindowScroll } from 'react-lazy-load-image-component';
import { filterStore } from '../../redux/filter-store/filter-store';

const Root = ({scrollPosition}) => {
    
    let movies = useMovies();
    const [loading, setLoading] = useState(true);
    const [thumbs, setThumbs] = useState(null);
    const thumbsRef = useRef(thumbs);
// °°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°
    useEffect(() => {
        const createThumbs = data => {
            const thumbs = Object.keys(data).map( (item, i) => 
            <LazyLoadComponent key={data[item].id} scrollPosition={scrollPosition} placeholder={ i === 0 ? <Loading big={true}/> : null}>
                <Thumb  data={data[item]} movie={true}/>
            </LazyLoadComponent> 
            );
            return thumbs;   
        }
        if(movies){
            setThumbs(createThumbs(movies))
            setLoading(false)
           filterStore.subscribe(() => {
                setThumbs(thumbsRef.current.filter(el => el.props.children.props.data.name.toLowerCase().includes(filterStore.getState().search.toLowerCase())
                    || el.props.children.props.data.acteurs.toLowerCase().includes(filterStore.getState().search.toLowerCase())
                    || el.props.children.props.data.realisateur.toLowerCase().includes(filterStore.getState().search.toLowerCase())
                    || el.props.children.props.data.tags.toLowerCase().includes(filterStore.getState().search.toLowerCase())
                ))
            })
        }
    }, [movies, scrollPosition]);
    useEffect(() => {
        if(!thumbsRef.current){
            thumbsRef.current = thumbs
        }
        if(thumbs && thumbs.length < 1){
            setThumbs(<Loading big={true} txt="Aucun résultat"/>)

        }
    }, [thumbs]);
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°   
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°   
    return (
            <Grid container className="mt-container">
            { loading ? <Loading big={true}/> : thumbs }
            </Grid>
  );
}

export default trackWindowScroll(Root);